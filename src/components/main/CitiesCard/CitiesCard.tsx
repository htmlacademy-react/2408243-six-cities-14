import { Link } from 'react-router-dom';
import { OfferType } from '../../../types';
import { Routers } from '../../../enums';

type CitiesCardProps = {
  offer: OfferType;
  cardHover?: (offerId: OfferType['id'] | null) => void;
};

function CitiesCard({ offer, cardHover }: CitiesCardProps) {
  const handleMouseEnter = () => {
    cardHover?.(offer.id);
  };

  const handleMouseLeave = () => {
    cardHover?.(null);
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>{offer?.isPremium}</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              offer.isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            className="header__logo-link"
            to={`${Routers.Offer}/${offer.id}`}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">
          {offer.type[0].toUpperCase() + offer.type.slice(1)}
        </p>
      </div>
    </article>
  );
}

export default CitiesCard;
