import { useParams } from 'react-router-dom';
import { Header, Page, Container, Map } from '../../components/common';
import {
  OfferGallery,
  OfferInsideRoom,
  OfferHost,
  OfferReview,
} from '../../components/offer';
import { OfferType, ReviewType } from '../../types';
import OfferCard from '../../components/offer/OfferCard/OfferCard';
import { useState } from 'react';

type OfferProps = {
  offers: OfferType[];
  reviews: ReviewType[];
};

function Offer({ offers, reviews }: OfferProps) {
  const { id } = useParams();
  const offer = offers.find((item) => item.id === Number(id));

  const notFavoriteOffers = offers.filter((otherOffer) => otherOffer.id !== offer?.id);

  const [selectedOfferId, setSelectedOfferId] = useState<number | null>(
    null
  );

  function handleMouseMove(offerId: number | null) {
    setSelectedOfferId(offerId);
  }

  return (
    <div className="page">
      <Header />
      <Page className="page__main--offer">
        <section className="offer">
          <OfferGallery images={offer!.images} />
          <Container className="offer__container">
            <div className="offer__wrapper">
              {offer?.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer?.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer!.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer!.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInsideRoom insideList={offer?.goods ?? []} />
              <OfferHost />
              <OfferReview reviews={reviews}/>
            </div>
          </Container>
          <Map
            className='offer__map'
            city={offer!.city.location}
            offers={offers}
            hoveredOfferId={selectedOfferId}
          />
          <Container>
            <section className="near-places places">
              <h2 className="near-places__title">
            Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {notFavoriteOffers.map((offerCard) => (
                  <OfferCard key={offerCard.id} card={offerCard} offerHover={handleMouseMove}/>
                ))}
              </div>
            </section>
          </Container>
        </section>
      </Page>
    </div>
  );
}

export default Offer;
