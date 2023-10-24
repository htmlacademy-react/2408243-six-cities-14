import LocationItem from '../../../types/LocationItem';

type MainMenuItemProps = {
  city: LocationItem;
  isActive: boolean;
}

export default function MainMenuItem({ city, isActive }: MainMenuItemProps) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link ${isActive && 'tabs__item--active'}`}>
        <span>{ city.name }</span>
      </a>
    </li>
  );
}
