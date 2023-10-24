import { Container, Footer, Header, Page } from '../../components/common';


const FavoritesEmpty = () =>
  (
    <div className="page page--favorites-empty">
      <Header />
      <Page className='page__main--favorites page__main--favorites-empty'>
        <Container className='page__favorites-container'>
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </Container>
      </Page>
      <Footer/>
    </div>);

export default FavoritesEmpty;
