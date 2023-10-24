import Container from '../../components/common/Container/Container';
import Header from '../../components/common/Header';
import Page from '../../components/common/Page';
import SignIn from '../../components/login/SignIn';

const Login = () =>
  (
    <div className="page page--gray page--login">
      <Header/>

      <Page className='page__main--login'>
        <Container className="page__login-container">
          <SignIn/>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </Container>
      </Page>
    </div>);

export default Login;
