import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import SettingProps from './props/SettingProps';
import Favorites from './pages/Favorites';
import FavoritesEmpty from './pages/FoviritesEmpty';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const SETTINGS: SettingProps = {
  offersCount: 3434
};

root.render(
  <React.StrictMode>
    {/* <App settings={SETTINGS} /> */}
    <FavoritesEmpty/>
  </React.StrictMode>
);
