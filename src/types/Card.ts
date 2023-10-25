import { MarkCardEnum } from '../enums';
import TypeCard from '../enums/TypeCardEnum';

type Card = {
  price: number;
  name: string;
  link: string;
  type: TypeCard;
  mark?: MarkCardEnum;
  image: string;
  rating: number;
}

export default Card;
