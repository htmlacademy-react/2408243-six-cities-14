import { PlaceSortingEnum } from '../../../enums/PlaceSortingEnum';

type PlacesSortingItemProps = {
  isActive?: boolean;
  content: PlaceSortingEnum;
}

export default function PlacesSortingItem({ isActive, content }: PlacesSortingItemProps) {
  return (
    <li className={`places__option ${isActive && 'places__option--active'}`} tabIndex = { 0 } > {content}</li>
  );
}
