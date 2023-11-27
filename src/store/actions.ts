import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types';
import { PlaceSortingEnum } from '../enums';

export const currentCityAction = createAction<string>('currentCity');
export const updateOffersAction = createAction<OfferType[]>('updateOffers');
export const placeSortingAction =
  createAction<PlaceSortingEnum>('placeSorting');
