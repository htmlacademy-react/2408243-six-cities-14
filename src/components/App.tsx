import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Setting } from '../types';
import { HelmetProvider } from 'react-helmet-async';
import { Main, Favorites, Login, Offer, NotFound } from '../pages';
import { AuthorizationStatus, Routers } from '../enums';
import { ProtectedRoute } from './common';

type AppProps = {
  settings: Setting;
};

export const App = ({ settings }: AppProps) => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={Routers.Main}
          element={<Main settings={settings} />}
        />
        <Route
          path={Routers.Favorites}
          element={
            <ProtectedRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
              redirectTo={Routers.Login}
            >
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routers.Login}
          element={
            <ProtectedRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
              redirectTo={Routers.Main}
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path={Routers.Offer} element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
