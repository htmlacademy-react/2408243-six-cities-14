import FavoriteCardProps from '../../../props/FavoriteCardProps';

type Card = {
  card: FavoriteCardProps;
}

const FavoritesCard = ({ card }: Card) => (
  <article className="favorites__card place-card">
    {card?.mark &&
      <div className="place-card__mark">
        <span>{ card?.mark}</span>
      </div>}
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={ card.image} width="150" height="110" alt="Place image"/>
      </a>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{ card.price }</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${card.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href={ card.link }>{ card.name }</a>
      </h2>
      <p className="place-card__type">{ card.type }</p>
    </div>
  </article>);

export default FavoritesCard;
