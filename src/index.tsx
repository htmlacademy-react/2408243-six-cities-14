import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import Setting from './types/Setting';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings: Setting = {
  offersCount: 3434
};

root.render(
  <React.StrictMode>
    <App settings={Settings} />
  </React.StrictMode>
);
