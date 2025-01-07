import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ModalBasic from '../components/ModalBasic';
import { RootContext } from '../utils/context/RootContextProvider';

function TrainingVideo() {
  const [trainingVideo, setTrainingVideo] = useState({});
  const [trainingVideos, setTrainingVideos] = useState([]);
  const [trainingVideoModalOpen, setTrainingVideoModalOpen] = useState(false);
  const [trainingVideoData, setTrainingVideoData] = useState({});
  const {state:{userType}} = useContext(RootContext);

  useEffect(() => {
    getTrainingVideos();
  }, []);

  const openAddTrainingVideoModal = () => {
    document.getElementById('trainerFormRef').reset();
    setTrainingVideo('');
    setTrainingVideoModalOpen(true);
  };

  const cleanObject = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== '' && !(typeof v === 'object' && Object.keys(v).length === 0)));
  };

  const uploadFile = async (event) => {
    try {
      const file = event.target.files[0];

      let fd = new FormData();
      fd.append('file', file, file.name);
      fd.append('type', 'training-videos');

      const response = await axios.post(`docs/upload`, fd);
      console.log(response);
      setTrainingVideoData(`${import.meta.env.VITE_REACT_APP_S3_URL}${response.data.folderName}/${response.data.fileName}`);
    } catch (error) {
      window.console.error(error);
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  const getTrainingVideos = async () => {
    try {
      const response = await axios.get('training-videos');
      setTrainingVideos(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTrainingVideo = async (trainer) => {
    try {
      let response = null;
      const payload = cleanObject({ ...trainer, video: trainingVideoData });
      if (trainer?.id) {
        response = await axios.put(`training-videos/${trainer.id}`, payload);
      } else {
        response = await axios.post('training-videos', payload);
      }
      console.log(response);
      setTrainingVideoModalOpen(false);
      getTrainingVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTrainingVideo = async (trainer) => {
    try {
      await axios.delete(`training-videos/${trainer.id}`);
      getTrainingVideos();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || 'Error while deleting the trainer');
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Training Videos</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Add customer button */}
          {(userType == '0' || userType == '1') && 
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={openAddTrainingVideoModal}>
              <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add Video</span>
            </button>
          }
        </div>
      </div>

      {/* Search form */}
      <div className="max-w-xl mb-5">
        <form className="relative">
          <label htmlFor="app-search" className="sr-only">
            Search
          </label>
          <input id="app-search" className="form-input w-full pl-9 py-3 bg-white dark:bg-slate-800" type="search" placeholder="Search…" />
          <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
            <svg
              className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 mr-2"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
              <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Page content */}
      <div>
        {/* Cards 1 (Video Courses) */}
        <div className="mt-8">
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-5">Videos</h2>
          <div className="grid grid-cols-12 gap-6">
            {trainingVideos.map((tv, index) => {
              return (
                <div
                  className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
                  key={index}
                >
                  <div className="flex flex-col h-full">
                    {/* Image */}
                    {/* <img className="w-full" src={''} width="286" height="160" alt="Application 01" /> */}
                    <video width="400" controls>
                      <source src={tv.video} />
                    </video>
                    {/* Card Content */}
                    <div className="grow flex flex-col p-5">
                      {/* Card body */}
                      <div className="grow">
                        {/* Header */}
                        <header className="mb-3">
                          <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold">{tv.title}</h3>
                        </header>
                        {/* Rating and price */}
                        <div className="flex flex-wrap justify-between items-center mb-4">
                          {/* Rating */}
                          <div className="flex items-center space-x-2 mr-2">
                            {/* Stars */}
                            <div className="flex space-x-1">
                              <button>
                                <span className="sr-only">1 star</span>
                                <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">2 stars</span>
                                <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">3 stars</span>
                                <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">4 stars</span>
                                <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">5 stars</span>
                                <svg className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600" viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                            </div>
                            {/* Rate */}
                            <div className="inline-flex text-sm font-medium text-amber-600">4.2</div>
                          </div>
                          {/* Price */}
                          <div>
                            <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">
                              {tv.price}
                            </div>
                          </div>
                        </div>
                        {/* Features list */}
                        {/* <ul className="text-sm space-y-2 mb-5 dark:text-slate-300">
                                <li className="flex items-center">
                                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                                    <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                                  </svg>
                                  <div>23 hours on-demand video</div>
                                </li>
                                <li className="flex items-center">
                                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                                    <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zm0 6c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zm-7-5c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                                  </svg>
                                  <div>8K+ active installations</div>
                                </li>
                              </ul> */}
                      </div>
                      {/* Card footer */}
                      {/* <div>
                              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">
                                Buy Now
                              </a>
                            </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {!trainingVideos?.length && <div>No videos exists</div>}
        </div>
      </div>

      <ModalBasic id="trainingVideo-tag-modal" modalOpen={trainingVideoModalOpen} title="Trainer">
        {/* Modal content */}
        <div className="px-5 py-4">
          <form id="trainerFormRef">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Title <span className="text-rose-500">*</span>
                </label>
                <input
                  id="title"
                  className="form-input w-full px-2 py-1"
                  type="text"
                  value={trainingVideo?.title}
                  onChange={(e) => setTrainingVideo({ ...trainingVideo, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Price <span className="text-rose-500">*</span>
                </label>
                <input
                  id="price"
                  className="form-input w-full px-2 py-1"
                  type="number"
                  value={trainingVideo?.price}
                  onChange={(e) => setTrainingVideo({ ...trainingVideo, price: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Description <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  className="form-input w-full px-2 py-1"
                  type="text"
                  value={trainingVideo?.description}
                  onChange={(e) => setTrainingVideo({ ...trainingVideo, description: e.target.value })}
                />
              </div>
              <div className="pb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="trainerType">
                  Video <span className="text-rose-500">*</span>
                </label>
                <input type="file" className="form-control" id="trainingVideo-image" onChange={uploadFile} />
              </div>
            </div>
          </form>
        </div>
        {/* Modal footer */}
        <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap justify-end space-x-2">
            <button
              className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
              onClick={(e) => {
                e.stopPropagation();
                setTrainingVideoModalOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              onClick={(e) => {
                e.stopPropagation();
                saveTrainingVideo(trainingVideo);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </ModalBasic>
    </div>
  );
}

export default TrainingVideo;
