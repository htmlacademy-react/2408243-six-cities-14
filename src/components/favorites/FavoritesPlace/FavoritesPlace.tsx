import FavoritePlace from '../../../types/FavoritePlace';
import FavoritesCard from '../FavoritesCard/FavoritesCard';

type FavoritePlaceProps = {
  place: FavoritePlace;
}

const FavoritesPlace = ({ place }: FavoritePlaceProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{ place.name }</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {place.cards.map((card) => <FavoritesCard key={card.name } card={card}/>) }
    </div>
  </li>
);

export default FavoritesPlace;
