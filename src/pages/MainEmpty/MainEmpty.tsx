import {
  Container,
  Header,
  Page,
  SectionContainer,
} from '../../components/common';
import { MainMenu, CitiesNoPlaces } from '../../components/main';
import { Dusseldorf } from '../../constants';

const MainEmpty = () => (
  <div className="page page--gray page--main">
    <Header />
    <Page className="page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <SectionContainer className="locations container">
          <MainMenu activeCity={Dusseldorf} />
        </SectionContainer>
      </div>
      <div className="cities">
        <Container className="cities__places-container cities__places-container--empty">
          <CitiesNoPlaces />
          <div className="cities__right-section"></div>
        </Container>
      </div>
    </Page>
  </div>
);

export default MainEmpty;
