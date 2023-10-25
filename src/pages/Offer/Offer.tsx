import { Header, Page, Container } from '../../components/common';
import { OfferGallery, OfferInsideRoom, OfferHost, OfferReview } from '../../components/offer';
import OfferCard from '../../components/offer/OfferCard/OfferCard';
import { CanalViewPrinsengrachtCard, NiceCard, WoodAndStoneCard } from '../../constants';

const images = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg'
];

const OfferInsideList = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];

const OfferCards = [
  WoodAndStoneCard,
  CanalViewPrinsengrachtCard,
  NiceCard
];

const Offer = () =>
  (
    <div className="page">
      <Header/>
      <Page className="page__main--offer">
        <section className="offer">
          <OfferGallery images={ images }/>
          <Container className="offer__container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                    Beautiful &amp; luxurious studio at great location
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
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">Apartment</li>
                <li className="offer__feature offer__feature--bedrooms">
                    3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                    Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInsideRoom insideList={OfferInsideList}/>
              <OfferHost/>
              <OfferReview/>
            </div>
          </Container>
          <section className="offer__map map" />
        </section>
        <Container>
          <section className="near-places places">
            <h2 className="near-places__title">
                    Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {OfferCards.map((card) => <OfferCard key={card.name} card={card} />)}
            </div>
          </section>
        </Container>
      </Page>
    </div>
  );

export default Offer;
