import {
  Header,
  Page,
  SectionContainer,
  Container,
} from '../../components/common';
import { MainMenu, PlacesSorting, CitiesCard } from '../../components/main';
import {
  BeautifulApartmentCard,
  WoodAndStoneCard,
  CanalViewPrinsengrachtCard,
  NiceCard,
  Amsterdam,
} from '../../constants';
import { PlaceSortingEnum } from '../../enums';
import { Setting } from '../../types';

type MainProps = {
  settings: Setting;
};

const Cards = [
  BeautifulApartmentCard,
  WoodAndStoneCard,
  CanalViewPrinsengrachtCard,
  NiceCard,
  WoodAndStoneCard,
];

function Main({ settings }: MainProps) {
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
                {Cards.map((card) => (
                  <CitiesCard key={card.name} card={card} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </Container>
        </div>
      </Page>
    </div>
  );
}

export default Main;
