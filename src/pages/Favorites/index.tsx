import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import FavoritesPlace from '../../components/main/Favorites/FavoritesPlace';
import FavoriteCardProps, { MarkCard, TypeCard } from '../../props/FavoriteCardProps';
import FavoritePlaceProps from '../../props/FavoritePlace';

const NiceCard: FavoriteCardProps = {
  price: 180,
  name: 'Nice, cozy, warm big bed apartment',
  link: '#',
  type: TypeCard.Apartment,
  mark: MarkCard.Premium,
  image: 'img/apartment-small-03.jpg',
  rating: 100
};
const WoodAndStoneCard: FavoriteCardProps = {
  price: 80,
  name: 'Wood and stone place',
  link: '#',
  type: TypeCard.Room,
  image: 'img/room-small.jpg',
  rating: 80
};
const WhiteCastleCard: FavoriteCardProps = {
  price: 180,
  name: 'White castle',
  link: '#',
  type: TypeCard.Apartment,
  image: 'img/apartment-small-04.jpg',
  rating: 100
};

const Amsterdam: FavoritePlaceProps = {
  name: 'Amsterdam',
  cards: [NiceCard, WoodAndStoneCard]
};

const Cologne: FavoritePlaceProps = {
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
