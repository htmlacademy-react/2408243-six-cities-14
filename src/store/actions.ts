import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types';
import { PlaceSortingEnum } from '../enums';
import { store } from '.';

export const updateCurrentCityAction = createAction<string>('currentCity');
export const updateOffersAction = createAction<OfferType[]>('updateOffers');
export const updateIsLoadingAction = createAction<boolean>('updateIsLoadingAction');
export const setOffers = createAction<OfferType[]>('setOffers');
export const something = createAction('something');
export const placeSortingAction =
  createAction<PlaceSortingEnum>('placeSorting');
export type AppDispatch = typeof store.dispatch;
