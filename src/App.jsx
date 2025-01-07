import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './css/style.css';
import './charts/ChartjsConfig';
import './utils/axios';
import MainApp from './AppInitializer';
import { RootContextProvider } from './utils/context/RootContextProvider';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <RootContextProvider>
      <MainApp />
    </RootContextProvider>
  );
}

export default App;
