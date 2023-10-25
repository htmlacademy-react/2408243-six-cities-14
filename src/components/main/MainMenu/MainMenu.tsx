import { Amsterdam, Brussels, Cologne, Dusseldorf, Hamburg, Paris } from '../../../constants/LocationItems';
import LocationItem from '../../../types/LocationItem';
import MainMenuItem from '../MainMenuItem/MainMenuItem';

type MainMenuProps = {
  activeCity: LocationItem;
}

const Cities: LocationItem[] = [
  Paris,
  Cologne,
  Brussels,
  Amsterdam,
  Hamburg,
  Dusseldorf
];

export default function MainMenu({ activeCity }: MainMenuProps) {
  return (
    <ul className="locations__list tabs__list">
      {
        Cities.map((city) => <MainMenuItem key={city.name} city={city} isActive={city === activeCity} />)
      }
    </ul>
  );
}
