import { Container, Footer, Header, Page } from '../../components/common';
import { FavoritesPlace } from '../../components/favorites';
import { NiceCard, WhiteCastleCard, WoodAndStoneCard } from '../../constants';
import { FavoritePlace } from '../../types';

const Amsterdam: FavoritePlace = {
  name: 'Amsterdam',
  cards: [NiceCard, WoodAndStoneCard],
};

const Cologne: FavoritePlace = {
  name: 'Cologne',
  cards: [WhiteCastleCard],
};

const Favorites = () => (
  <div className="page">
    <Header isActiveNav />
    <Page className="page__main--favorites">
      <Container className="page__favorites-container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoritesPlace place={Amsterdam} />
            <FavoritesPlace place={Cologne} />
          </ul>
        </section>
      </Container>
    </Page>
    <Footer />
  </div>
);

export default Favorites;
