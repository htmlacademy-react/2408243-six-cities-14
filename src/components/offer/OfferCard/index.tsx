import Card from '../../../types/Card';

type OfferCardProps = {
  card: Card;
}

const OfferCard = ({ card }: OfferCardProps) => (
  <article className="near-places__card place-card">
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    <div className="near-places__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={ card.image}
          width={260}
          height={200}
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{ card.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button
          className="place-card__bookmark-button button"
          type="button"
        >
          <svg
            className="place-card__bookmark-icon"
            width={18}
            height={19}
          >
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: '100%' }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href={ card.link}>{ card.name}</a>
      </h2>
      <p className="place-card__type">{ card.type}</p>
    </div>
  </article>);

export default OfferCard;
