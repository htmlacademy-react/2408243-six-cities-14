import Container from '../../components/common/Container/Container';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Page from '../../components/common/Page';

const FavoritesEmpty = () =>
  (
    <div className="page page--favorites-empty">
      <Header />
      <Page
        className='page__main page__main--favorites page__main--favorites-empty'
        content={
          <Container
            className='page__favorites-container container'
            content={
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            }
          />
        }
      />
      <Footer/>
    </div>);

export default FavoritesEmpty;
