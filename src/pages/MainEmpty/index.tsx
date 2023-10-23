import Header from '../../components/common/Header';
import Page from '../../components/common/Page';
import SectionContainer from '../../components/common/SectionContainer';
import MainMenu from '../../components/main/MainMenu';
import { Dusseldorf } from '../../constants/LocationItems';

const MainEmpty = () =>
  (
    <div className="page page--gray page--main">
      <Header></Header>

      <Page
        className="page__main page__main--index page__main--index-empty"
        content={
          <>
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <SectionContainer className='locations container'
                content={<MainMenu activeCity={Dusseldorf} />}
              />
            </div>
            <div className="cities">
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
            </div>
          </>
        }
      />
    </div>);

export default MainEmpty;
