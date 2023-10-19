import { MarkCard } from '../enums/MarkCardEnum';
import { TypeCard } from '../enums/TypeCardEnum';

type Card = {
  price: number;
  name: string;
  link: string;
  type: TypeCard;
  mark?: MarkCard;
  image: string;
  rating: number;
}

export default Card;
