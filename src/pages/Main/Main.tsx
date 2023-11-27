import {
  Header,
  Page,
  SectionContainer,
} from '../../components/common';
import { MainMenu, CitiesList } from '../../components/main';
import { Amsterdam } from '../../constants';
import { OfferType } from '../../types';
import { currentOffersByCity, useAppSelector } from '../../store';

function Main() {
  const currentSortOption = useAppSelector((store) => store.placeSorting);
  const currentCityOffers: OfferType[] = useAppSelector(currentOffersByCity);
  const sortingOffers: { [key: string]: OfferType[] } = {
    'Popular': currentCityOffers,
    'Price: low to high': [...currentCityOffers].sort(
      (a, b) => a.price - b.price
    ),
    'Price: high to low': [...currentCityOffers].sort(
      (a, b) => b.price - a.price
    ),
    'Top rated first': [...currentCityOffers].sort(
      (a, b) => b.rating - a.rating
    ),
  };
  const sortedOffers = sortingOffers[currentSortOption];

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
        <CitiesList offers={sortedOffers}/>
      </Page>
    </div>
  );
}

export default Main;
