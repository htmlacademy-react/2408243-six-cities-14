import { OfferType } from '../../../types';
import { CitiesCard, PlacesSorting } from '..';
import { city } from '../../../mocks/cityMap';
import { Container, Map } from '../../common';
import { useAppSelector } from '../../../store';
import { useState } from 'react';
import { selectSortingParameter } from '../../../store/selectors';

type CitiesListProps = {
  offers: OfferType[];
};

function CitiesList({ offers }: CitiesListProps) {
  const currentCity = useAppSelector((store) => store.currentCity);
  const activeSort = useAppSelector(selectSortingParameter);

  const [selectedOfferCardId, setSelectedOfferCardId] = useState<number | null>(
    null
  );

  function handleMouseMove(offerId: number | null) {
    setSelectedOfferCardId(offerId);
  }

  return (
    <div className="cities">
      <Container className="cities__places-container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {currentCity}
          </b>
          <PlacesSorting activeSort={activeSort} />
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
            className="cities__map"
            city={city}
            offers={offers}
            hoveredOfferId={selectedOfferCardId}
          />
        </div>
      </Container>
    </div>
  );
}

export default CitiesList;
