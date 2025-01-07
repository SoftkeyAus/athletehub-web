import React, { useContext } from 'react';
import WelcomeBanner from '../../partials/dashboard/WelcomeBanner';
import { RootContext } from '../../utils/context/RootContextProvider';

function Dashboard() {

  const {state:{userType}} = useContext(RootContext);

  return (
    <main className="grow">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Welcome banner */}
        <WelcomeBanner title={`Welcome to ${userType == '1' ? "Trainer": userType == '2'? "Athlete": "Admin"} dashboard`} />
      </div>
    </main>
  );
}

export default Dashboard;