import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import AccountDetailsPanel from '../partials/settings/AccountDetailsPanel';

function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Profile Settings</h1>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <AccountDetailsPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
