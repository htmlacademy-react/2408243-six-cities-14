export enum TypeCard {
  Apartment = 'Apartment',
  Room = 'Room'
}

export enum MarkCard {
  Premium = 'Premium'
}

type CardProps = {
  price: number;
  name: string;
  link: string;
  type: TypeCard;
  mark?: MarkCard;
  image: string;
  rating: number;
}

export default CardProps;
