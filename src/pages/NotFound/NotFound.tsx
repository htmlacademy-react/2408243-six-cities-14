import { Container, Header, Page, SectionContainer } from '../../components/common';
import { MainMenu, CitiesNoPlaces } from '../../components/main';
import { Dusseldorf } from '../../constants';

const MainEmpty = () =>
  (
    <div className="page page--gray page--main">
      <Header/>
      <Page className="page__main--index page__main--index-empty">
        
      </Page>
    </div>);

export default MainEmpty;
