import { Container } from '..';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';

type HeaderProps = {
  isActiveNav?: boolean;
};

export default function Header({ isActiveNav }: HeaderProps) {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <HeaderLogo />
          {isActiveNav && <HeaderNav />}
        </div>
      </Container>
    </header>
  );
}
