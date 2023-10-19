import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import FavoritesPlace from '../../components/Favorites/FavoritesPlace';
import { NiceCard, WhiteCastleCard, WoodAndStoneCard } from '../../constants/Cards';
import FavoritePlace from '../../types/FavoritePlace';

const Amsterdam: FavoritePlace = {
  name: 'Amsterdam',
  cards: [NiceCard, WoodAndStoneCard]
};

const Cologne: FavoritePlace = {
  name: 'Cologne',
  cards: [WhiteCastleCard]
};

const Favorites = () => (
  <div className="page">
    <Header></Header>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoritesPlace place={ Amsterdam }/>
            <FavoritesPlace place={ Cologne }/>
          </ul>
        </section>
      </div>
    </main>
    <Footer></Footer>
  </div>
);

export default Favorites;
