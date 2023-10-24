import Container from '../../components/common/Container/Container';
import Header from '../../components/common/Header';
import Page from '../../components/common/Page';
import SectionContainer from '../../components/common/SectionContainer';
import CitiesNoPlaces from '../../components/main/CitiesNoPlaces';
import MainMenu from '../../components/main/MainMenu';
import { Dusseldorf } from '../../constants/LocationItems';

const MainEmpty = () =>
  (
    <div className="page page--gray page--main">
      <Header></Header>

      <Page className="page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <SectionContainer className='locations container'>
            <MainMenu activeCity={Dusseldorf} />
          </SectionContainer>
        </div>
        <div className="cities">
          <Container className="cities__places-container cities__places-container--empty">
            <CitiesNoPlaces/>
            <div className="cities__right-section"></div>
          </Container>
        </div>
      </Page>
    </div>);

export default MainEmpty;
