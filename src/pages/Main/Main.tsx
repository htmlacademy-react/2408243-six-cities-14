import { Header, Page, SectionContainer } from '../../components/common';
import { MainMenu, CitiesList } from '../../components/main';
import { Amsterdam } from '../../constants';
import { OfferType } from '../../types';
import { currentOffersByCity, useAppSelector } from '../../store';

function Main() {
  const offers = useAppSelector((state) => state.offers);
  console.log('offers', offers)
  // const dispatch = useAppDispatch()
  // dispatch(something(fetchOffers() as any))
  // const offers2 = useAppSelector((state) => state.something);
  // console.log('offers2', offers2)

  const isLoading:boolean = useAppSelector((state) => state.isLoading);
  const currentSortOption = useAppSelector((store) => store.placeSorting);
  const currentCityOffers: OfferType[] = useAppSelector(currentOffersByCity);
  const sortingOffers: { [key: string]: OfferType[] } = {
    Popular: currentCityOffers,
    'Price: low to high': currentCityOffers.sort(
      (a, b) => a.price - b.price
    ),
    'Price: high to low': currentCityOffers.sort(
      (a, b) => b.price - a.price
    ),
    'Top rated first': currentCityOffers.sort(
      (a, b) => b.rating - a.rating
    ),
  };
  const sortedOffers = sortingOffers[currentSortOption];

  return (
    <div className="page page--gray page--main">
      <Header />
      {isLoading && <div>isLoading</div>}
      {(!isLoading) && <div>!!! isLoading</div>}
      <Page className="page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <SectionContainer className="locations">
            <MainMenu activeCity={Amsterdam} />
          </SectionContainer>
        </div>
        <CitiesList offers={sortedOffers} />
      </Page>
    </div>
  );
}

export default Main;
