import { useState } from 'react';
import {
  Header,
  Page,
  SectionContainer,
  Container,
  Map,
} from '../../components/common';
import { MainMenu, PlacesSorting, CitiesCard } from '../../components/main';
import { Amsterdam } from '../../constants';
import { PlaceSortingEnum } from '../../enums';
import { OfferType, Setting } from '../../types';
import { city } from '../../mocks/cityMap';

type MainProps = {
  offers: OfferType[];
  settings: Setting;
};

function Main({ settings, offers }: MainProps) {
  const [selectedOfferCardId, setSelectedOfferCardId] = useState<number | null>(
    null
  );

  function handleMouseMove(offerId: number | null) {
    setSelectedOfferCardId(offerId);
  }
  return (
    <div className="page page--gray page--main">
      <Header />
      <Page className="page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <SectionContainer className="locations">
            <MainMenu activeCity={Amsterdam} />
          </SectionContainer>
        </div>
        <div className="cities">
          <Container className="cities__places-container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {settings.offersCount} places to stay in Amsterdam
              </b>
              <PlacesSorting activeSort={PlaceSortingEnum.Popular} />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <CitiesCard
                    key={offer.id}
                    offer={offer}
                    cardHover={handleMouseMove}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className='cities__map'
                city={city}
                offers={offers}
                hoveredOfferId={selectedOfferCardId}
              />
            </div>
          </Container>
        </div>
      </Page>
    </div>
  );
}

export default Main;
