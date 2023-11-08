import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Setting, OfferType } from '../types';
import { HelmetProvider } from 'react-helmet-async';
import { Main, Favorites, Login, Offer, NotFound } from '../pages';
import { AuthorizationStatus, Routers } from '../enums';
import { ProtectedRoute } from './common';

type AppProps = {
  offers: OfferType[];
  settings: Setting;
};

export const App = ({ settings, offers }: AppProps) => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={Routers.Main}
          element={<Main settings={settings} offers={offers} />}
        />
        <Route
          path={Routers.Favorites}
          element={
            <ProtectedRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
              redirectTo={Routers.Login}
            >
              <Favorites offers={offers} />
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
