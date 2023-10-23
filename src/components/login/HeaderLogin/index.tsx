import Container from '../../common/Container/Container';

type HeaderLoginProps = {
  className?: string;
}

export default function HeaderLogin({className} : HeaderLoginProps) {
  return (
    <header className={className}>
      <Container
        className="container"
        content={
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        }
      />
    </header>
  );
}
