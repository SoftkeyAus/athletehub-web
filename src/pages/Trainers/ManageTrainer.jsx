import { useEffect, useState } from "react";
import {
  createUpdateTrainerrequest,
  getAgeGroups,
  getTrainerDetailsRequest,
  getTrainingTypesList
} from "./http";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getSubscriptions } from "../../_services/CommonHttpServices";

function ManageTrainer() {

  const [formData, setFormData] = useState({});
  const [ageGroups, setAgeGroups] = useState([]);
  const [trainerImage, setTrainerImage] = useState();
  const [trainingTypes, setTrainingTypes] = useState([]);
  const [subscriptionList, setSubscriptionList] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const getAgeGroupList = async () => {
    try {
      const response = await getAgeGroups();
      setAgeGroups(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrainerDetails = async (id) => {
    const data = await getTrainerDetailsRequest(id);
    let trainerInfo = {
      trainerId: data.data.trainerId,
      firstName: data.data.firstName,
      lastName: data.data.lastName,
      email: data.data.email,
      mobile: data.data.mobile,
      trainingTypeId: data.data.trainingTypeId,
      ageGroup: data.data.ageGroup,
      zipcode: data.data.zipcode,
      updatedBy: '2',
      profileImage: data.data.profileImage,
      address: data.data.address,
      city: data.data.city,
      country: data.data.country,
      userName: data.data.userName,
      licenseNumber: data.data.licenseNumber,
      sports: data.data.sports,
      achievements: data.data.achievements,
      subscription: data.data.subscription
    }
    setFormData(trainerInfo)
  }

  const getTrainingTypes = async () => {
    try {
      const response = await getTrainingTypesList();
      setTrainingTypes(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getSubscriptionsList = async () => {
    try {
      const response = await getSubscriptions();
      setSubscriptionList(response.data);
    } catch(error) {

    }
  }

  useEffect(() => {
    getAgeGroupList();
    getTrainingTypes();
    getSubscriptionsList();

    if(id) {
      getTrainerDetails(id);
    }
  }, []);

  const cleanObject = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== '' && !(typeof v === 'object' && Object.keys(v).length === 0)));
  };


  const uploadFile = async (event) => {
    try {
      const file = trainerImage;

      let fd = new FormData();
      fd.append('file', file, file.name);
      fd.append('type', 'trainers');

      const response = await axios.post(`docs/upload`, fd, {
        baseURL: 'http://16.171.240.95:3000/'
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const saveTrainer = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      let imagePath = null;
      if (trainerImage) {
        let uploadImgResponse = await uploadFile();
        imagePath = `https://athletehub-files.s3.eu-north-1.amazonaws.com/${uploadImgResponse.data.folderName}/${uploadImgResponse.data.fileName}`
      }
      else {
        imagePath = formData.profileImage
      }

      let response = null;
      const payload = cleanObject({ ...formData, profileImage: imagePath });
      if (id) {
        payload.updatedBy = '1';
      } else {
        payload.createdBy = '1';
      }
      response = await createUpdateTrainerrequest(payload)
      console.log(response)
      navigate('/admin/trainers');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Content area */}
      <div className="relative flex flex-col flex-1">
        {/* Left: Title */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">{id?'Edit Trainer': 'Add Trainer'}</h1>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
          <div className="p-3">
            <form id="trainerFormRef" noValidate onSubmit={(e) => saveTrainer(e)}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    className="form-input w-full px-2 py-1"
                    type="text"
                    value={formData?.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="training">
                    Training Type <span className="text-rose-500">*</span>
                  </label>
                  <select id="training" className="form-select w-full" value={formData?.trainingTypeId} onChange={(e) => setFormData({ ...formData, trainingTypeId: e.target.value })}>
                    <option value="">-- Select Training Type--</option>
                    {trainingTypes.length != 0 && trainingTypes.map((data, i) =>
                      <option key={i} value={data.trainingTypeId}>{data.name}</option>
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="subscription">
                    Subscription Type <span className="text-rose-500">*</span>
                  </label>
                  <select id="subscription" className="form-select w-full" value={formData?.subscription} onChange={(e) => setFormData({ ...formData, subscription: e.target.value })}>
                    <option value="">-- Select Subscription Type--</option>
                    {subscriptionList.length != 0 && subscriptionList.map((data, i) =>
                      <option key={i} value={data.id}>{data.title}</option>
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input id="lastName" className="form-input w-full px-2 py-1" type="text" value={formData?.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input id="email"
                    className="form-input w-full px-2 py-1"
                    type="email"
                    value={formData?.email}
                    readOnly={id ? true : false}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Mobile <span className="text-rose-500">*</span>
                  </label>
                  <input id="mobile" className="form-input w-full px-2 py-1" type="number" value={formData?.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="age">
                    Age Group <span className="text-rose-500">*</span>
                  </label>
                  <select id="age" className="form-select w-full" value={formData?.ageGroup} onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}>
                    <option value="">-- Select Age Group --</option>
                    {ageGroups && ageGroups.map((v, key) => {
                      return (
                        <option value={v.lookupId} key={key}>
                          {v.lookupName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="zipcode">
                    ZipCode <span className="text-rose-500">*</span>
                  </label>
                  <input id="zipcode" className="form-input w-full px-2 py-1" type="number" value={formData?.zipcode} onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="address">
                    Address <span className="text-rose-500">*</span>
                  </label>
                  <input id="address" className="form-input w-full px-2 py-1" type="text" value={formData?.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="city">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <input id="city" className="form-input w-full px-2 py-1" type="text" value={formData?.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="country">
                    Country <span className="text-rose-500">*</span>
                  </label>
                  <input id="country" className="form-input w-full px-2 py-1" type="text" value={formData?.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="username">
                    User Name <span className="text-rose-500">*</span>
                  </label>
                  <input id="username" className="form-input w-full px-2 py-1" type="text" value={formData?.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
                </div>
                {!id && <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="pwd">
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <input id="pwd" className="form-input w-full px-2 py-1" type="text" value={formData?.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="license">
                    License Number <span className="text-rose-500">*</span>
                  </label>
                  <input id="license" className="form-input w-full px-2 py-1" type="text" value={formData?.licenseNumber} onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="sports">
                    Sports <span className="text-rose-500">*</span>
                  </label>
                  <input id="sports" className="form-input w-full px-2 py-1" type="text" value={formData?.sports} onChange={(e) => setFormData({ ...formData, sports: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="achievements">
                    Achievements <span className="text-rose-500">*</span>
                  </label>
                  <input id="achievements" className="form-input w-full px-2 py-1" type="text" value={formData?.achievements} onChange={(e) => setFormData({ ...formData, achievements: e.target.value })} />
                </div>
                <div className="pb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="profile">
                    Profile Image <span className="text-rose-500">*</span>
                  </label>
                  <input type="file" className="form-control" id="profile-image" onChange={(e) => setTrainerImage(e.target.files[0])} />
                  <div>
                    {(id && formData.profileImage) &&
                      <img
                        src={formData.profileImage}
                        width="32"
                        height="32"
                        alt="User 04" />}
                  </div>
                </div>

              </div>
              <div className="flex flex-wrap justify-end space-x-2 my-3">
                <button
                  className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                  onClick={(e) => navigate('/admin/trainers')}>
                  Cancel
                </button>
                <button
                  className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
                  type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageTrainer;