import CardProps, { MarkCard, TypeCard } from '../props/FavoriteCardProps';

export const NiceCard: CardProps = {
  price: 180,
  name: 'Nice, cozy, warm big bed apartment',
  link: '#',
  type: TypeCard.Apartment,
  mark: MarkCard.Premium,
  image: 'img/apartment-small-03.jpg',
  rating: 100
};

export const WoodAndStoneCard: CardProps = {
  price: 80,
  name: 'Wood and stone place',
  link: '#',
  type: TypeCard.Room,
  image: 'img/room-small.jpg',
  rating: 80
};

export const WhiteCastleCard: CardProps = {
  price: 180,
  name: 'White castle',
  link: '#',
  type: TypeCard.Apartment,
  image: 'img/apartment-small-04.jpg',
  rating: 100
};

export const CanalViewPrinsengrachtCard: CardProps = {
  price: 132,
  name: 'Canal View Prinsengracht',
  link: '#',
  type: TypeCard.Apartment,
  image: 'img/apartment-02.jpg',
  rating: 100
};
