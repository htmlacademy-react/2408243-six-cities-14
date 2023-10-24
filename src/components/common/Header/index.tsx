import Container from '../Container/Container';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

type HeaderProps = {
  isActiveNav?: boolean;
}

export default function Header({ isActiveNav }:HeaderProps) {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <HeaderLogo/>
          { isActiveNav && <HeaderNav/> }
        </div>
      </Container>
    </header>
  );
}
