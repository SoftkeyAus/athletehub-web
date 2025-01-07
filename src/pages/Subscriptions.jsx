import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import DeleteButton from '../partials/actions/DeleteButton';
import DateSelect from '../components/DateSelect';
import FilterButton from '../components/DropdownFilter';
import PaginationClassic from '../components/PaginationClassic';
import ModalBasic from '../components/ModalBasic';

function Subscriptions() {
  const [subscription, setSubscription] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);

  useEffect(() => {
    getSubscriptions();
  }, []);

  const getSubscriptions = async () => {
    try {
      const response = await axios.get('subscriptions');
      setSubscriptions(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveSubscription = async (subscription) => {
    try {
      let response = null;
      if (subscription?.id) {
        response = await axios.put(`subscriptions/${subscription.id}`, subscription);
      } else {
        response = await axios.post('subscriptions', subscription);
      }
      console.log(response);
      setSubscriptionModalOpen(false);
      getSubscriptions();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSubscription = async (subscription) => {
    try {
      await axios.delete(`subscriptions/${subscription.id}`);
      getSubscriptions();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || 'Error while deleting the Subscription');
    }
  };

  const openAddSubscriptionModal = () => {
    document.getElementById('subscriptionFormRef').reset();
    setSubscription('');
    setSubscriptionModalOpen(true);
  };

  const openEditSubscriptionModal = (subscription) => {
    setSubscription({ ...subscription });
    setSubscriptionModalOpen(true);
  };

  return (
    <main className="grow">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Subscriptions</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Delete button */}
            <DeleteButton selectedItems={selectedItems} />

            {/* Dropdown */}
            <DateSelect />

            {/* Filter button */}
            <FilterButton align="right" />

            {/* Add customer button */}
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={openAddSubscriptionModal}>
              <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add Subscription</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Subscriptions <span className="text-slate-400 dark:text-slate-500 font-medium">{subscriptions.length}</span>
            </h2>
          </header>
          <div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Title</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Price</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Duration</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Features</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <span className="sr-only">Menu</span>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                  {subscriptions.map((subscription) => {
                    return (
                      <tr key={subscription.id}>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left">{subscription.title}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left">{subscription.price}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left">{subscription.duration}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left">{subscription.features}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                          <button
                            className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
                            onClick={() => openEditSubscriptionModal(subscription)}
                          >
                            Edit
                          </button>
                          <button className="font-medium text-sm text-rose-500 hover:text-rose-600 py-1 px-3 cursor-pointer inline-block" onClick={() => deleteSubscription(subscription)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <PaginationClassic />
        </div>

        <ModalBasic id="subscription-type-modal" modalOpen={subscriptionModalOpen} title="Subscription">
          {/* Modal content */}
          <div className="px-5 py-4">
            <form id="subscriptionFormRef">
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Title <span className="text-rose-500">*</span>
                  </label>
                  <input id="name" className="form-input w-full px-2 py-1" type="text" value={subscription?.title} onChange={(e) => setSubscription({ ...subscription, title: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Price <span className="text-rose-500">*</span>
                  </label>
                  <input id="name" className="form-input w-full px-2 py-1" type="text" value={subscription?.price} onChange={(e) => setSubscription({ ...subscription, price: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Duration <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    className="form-input w-full px-2 py-1"
                    type="text"
                    value={subscription?.duration}
                    onChange={(e) => setSubscription({ ...subscription, duration: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="description">
                    Features <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    className="form-input w-full px-2 py-1"
                    type="text"
                    value={subscription?.features}
                    onChange={(e) => setSubscription({ ...subscription, features: e.target.value })}
                  />
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
                  setSubscriptionModalOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  saveSubscription(subscription);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </ModalBasic>
      </div>
    </main>
  );
}

export default Subscriptions;
