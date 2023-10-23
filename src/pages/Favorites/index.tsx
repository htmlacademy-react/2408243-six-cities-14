import Container from '../../components/common/Container';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import PageMain from '../../components/common/Page';
import FavoritesPlace from '../../components/favorites/FavoritesPlace';
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
    <Header/>
    <PageMain
      className="page__main page__main--favorites"
      content={
        <Container
          className='page__favorites-container container'
          content={
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoritesPlace place={Amsterdam} />
                <FavoritesPlace place={Cologne} />
              </ul>
            </section>
          }
        />
      }
    />
    <Footer/>
  </div>
);

export default Favorites;
