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
import { OfferType } from '../../types';
import { city } from '../../mocks/cityMap';
import { selectSortingParameter, useAppSelector } from '../../store';

function Main() {
  const [selectedOfferCardId, setSelectedOfferCardId] = useState<number | null>(
    null
  );

  function handleMouseMove(offerId: number | null) {
    setSelectedOfferCardId(offerId);
  }

  const currentCity = useAppSelector((store) => store.currentCity);
  const currentSortOption = useAppSelector((store) => store.placeSorting);
  const currentCityOffers : OfferType[] = useAppSelector((store) => store.offers.filter((offer) => offer.city.name === currentCity));

  //TODO: требуется куда-то вынести
  const sortingVariants : {[key:string]: OfferType[]} = {
    'Popular': currentCityOffers,
    'Price: low to high': [...currentCityOffers].sort((a, b) => a.price - b.price),
    'Price: high to low': [...currentCityOffers].sort((a, b) => b.price - a.price),
    'Top rated first': [...currentCityOffers].sort((a, b) => b.rating - a.rating),
  };
  const sortedOffers = sortingVariants[currentSortOption];

  //TODO: вынести список городов
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
                {currentCityOffers.length} places to stay in {currentCity}
              </b>
              <PlacesSorting activeSort={useAppSelector(selectSortingParameter)} />
              <div className="cities__places-list places__list tabs__content">
                {sortedOffers.map((offer) => (
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
                className="cities__map"
                city={city}
                offers={sortedOffers}
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
