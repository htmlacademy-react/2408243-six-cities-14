import { Container, Header, Page } from '../../components/common';

const MainEmpty = () => (
  <div className="page page--gray page--main">
    <Header />
    <Page className="page__main--index page__main--index-empty">
      <Container>
        <h1>Страница не найдена</h1>
        <img src="markup/img/not_found.png" alt="Страница не найдена"></img>
      </Container>
    </Page>
  </div>
);

export default MainEmpty;
