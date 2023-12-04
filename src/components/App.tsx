import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OfferType, ReviewType } from '../types';
import { HelmetProvider } from 'react-helmet-async';
import { Main, Favorites, Login, Offer, NotFound } from '../pages';
import { AuthorizationStatus, Routers } from '../enums';
import { ProtectedRoute } from './common';

type AppProps = {
  reviews: ReviewType[];
};

export const App = ({ reviews }: AppProps) => {
  // store.dispatch(getOffers);s
  // const state2 = useAppSelector((state: State) => state);
  // const offers = state.offers;
  // console.log(state2);
  // if (isOffersDataLoading) {
  //   return (
  //     <Spinner />
  //   );
  // }
  const offers:OfferType[] = [];
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index path={Routers.Main} element={<Main />} />
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
          <Route
            path={Routers.Offer}
            element={<Offer offers={offers} reviews={reviews} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};
