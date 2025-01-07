import React, { useState } from 'react';

import DateSelect from '../components/DateSelect';
import FilterButton from '../components/DropdownFilter';
import PaginationClassic from '../components/PaginationClassic';
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';
import DeleteButton from '../partials/actions/DeleteButton';
import MembersTable from '../partials/members/MembersTable';
import ModalBasic from '../components/ModalBasic';

function Members() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Members</h1>
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
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span
                    className="hidden xs:block ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMemberModalOpen(true);
                    }}
                  >
                    Add Member
                  </span>
                </button>
              </div>
            </div>

            {/* Table */}
            <MembersTable selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>

            <ModalBasic id="member-modal" modalOpen={memberModalOpen} setModalOpen={setMemberModalOpen} title="Member">
              {/* Modal content */}
              <div className="px-5 py-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Mobile <span className="text-rose-500">*</span>
                    </label>
                    <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Training Type <span className="text-rose-500">*</span>
                    </label>
                    <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Age Group <span className="text-rose-500">*</span>
                    </label>
                    <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap justify-end space-x-2">
                  <button
                    className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMemberModalOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Send</button>
                </div>
              </div>
            </ModalBasic>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Members;
