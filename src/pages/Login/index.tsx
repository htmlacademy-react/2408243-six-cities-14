import Container from '../../components/common/Container/Container';
import Page from '../../components/common/Page';
import HeaderLogin from '../../components/login/HeaderLogin';
import LoginInput from '../../components/login/LoginInput';

const Login = () =>
  (
    <div className="page page--gray page--login">
      <HeaderLogin className="header"/>

      <Page
        className='page__main page__main--login'
        content={
          <Container
            className="page__login-container container"
            content={
              <>
                <section className="login">
                  <h1 className="login__title">Sign in</h1>
                  <form className="login__form form" action="#" method="post">
                    <LoginInput
                      title='E-main'
                      type='email'
                      name='email'
                      placeholder='Email'
                      isRequired
                    />
                    <LoginInput
                      title='Password'
                      type='password'
                      name='password'
                      placeholder='Password'
                      isRequired
                    />
                    <button className="login__submit form__submit button" type="submit">Sign in</button>
                  </form>
                </section>
                <section className="locations locations--login locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </section>
              </>
            }
          />
        }
      />
    </div>);

export default Login;
