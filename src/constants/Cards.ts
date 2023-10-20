import MarkCard from '../enums/MarkCardEnum';
import TypeCard from '../enums/TypeCardEnum';
import Card from '../types/Card';

export const NiceCard: Card = {
  price: 180,
  name: 'Nice, cozy, warm big bed apartment',
  link: '#',
  type: TypeCard.Apartment,
  mark: MarkCard.Premium,
  image: 'img/apartment-small-03.jpg',
  rating: 100
};

export const WoodAndStoneCard: Card = {
  price: 80,
  name: 'Wood and stone place',
  link: '#',
  type: TypeCard.Room,
  image: 'img/room-small.jpg',
  rating: 80
};

export const WhiteCastleCard: Card = {
  price: 180,
  name: 'White castle',
  link: '#',
  type: TypeCard.Apartment,
  image: 'img/apartment-small-04.jpg',
  rating: 100
};

export const CanalViewPrinsengrachtCard: Card = {
  price: 132,
  name: 'Canal View Prinsengracht',
  link: '#',
  type: TypeCard.Apartment,
  image: 'img/apartment-02.jpg',
  rating: 100
};

export const BeautifulApartmentCard: Card = {
  price: 120,
  name: 'Beautiful & luxurious apartment at great location',
  link: '#',
  type: TypeCard.Apartment,
  image: 'img/apartment-01.jpg',
  rating: 80
};
