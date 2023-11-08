import { Container, Footer, Header, Page } from '../../components/common';
import { OfferType } from '../../types';
import { FavoriteList } from '../../components/favorites';

type FavoritesProps = {
  offers: OfferType[];
};

const Favorites = ({ offers }: FavoritesProps) => {
  function getFavoritesOffers(): OfferType[] {
    return offers.filter((offer) => offer.isFavorite === true);
  }

  return (
    <div className="page">
      <Header isActiveNav />
      <Page className="page__main--favorites">
        <Container className="page__favorites-container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList favoriteOffers={getFavoritesOffers()}></FavoriteList>
          </section>
        </Container>
      </Page>
      <Footer />
    </div>
  );
};

export default Favorites;
