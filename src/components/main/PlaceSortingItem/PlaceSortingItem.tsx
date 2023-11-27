import { PlaceSortingEnum } from '../../../enums';
import { useAppDispatch } from '../../../store';
import { placeSortingAction } from '../../../store/actions';

type PlacesSortingItemProps = {
  isActive?: boolean;
  content: PlaceSortingEnum;
};

export default function PlacesSortingItem({
  isActive,
  content,
}: PlacesSortingItemProps) {
  const dispatch = useAppDispatch();
  return (
    <li
      className={`places__option ${isActive && 'places__option--active'}`}
      tabIndex={0}
      onClick={() => dispatch(placeSortingAction(content))}
    >
      {' '}
      {content}
    </li>
  );
}
