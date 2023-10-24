import { PlaceSortingEnum } from '../../../enums/PlaceSortingEnum';
import PlaceSortingItem from '../PlaceSortingItem/PlaceSortingItem';

type PlacesSortingProps = {
  activeSort: PlaceSortingEnum;
}

export default function PlacesSorting({ activeSort }: PlacesSortingProps) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}> Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(PlaceSortingEnum).map((item) => <PlaceSortingItem key={ item } content={item} isActive={item === activeSort } />) }
      </ul>
    </form>
  );
}
