import React from 'react';

import AppImage01 from '../../assets/images/applications-image-01.jpg';
import AppImage02 from '../../assets/images/applications-image-02.jpg';
import AppImage03 from '../../assets/images/applications-image-03.jpg';
import AppImage04 from '../../assets/images/applications-image-04.jpg';

function ShopCards01() {
  return (
    <React.Fragment>
      {/* Card 1 */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return (
          <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Image */}
              <img className="w-full" src={AppImage01} width="286" height="160" alt="Application 01" />
              {/* Card Content */}
              <div className="grow flex flex-col p-5">
                {/* Card body */}
                <div className="grow">
                  {/* Header */}
                  <header className="mb-3">
                    <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold">Resistance Bands Set</h3>
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
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                  {/* Features list */}
                  <ul className="text-sm space-y-2 mb-5 dark:text-slate-300">
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
                  </ul>
                </div>
                {/* Card footer */}
                <div>
                  <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default ShopCards01;
