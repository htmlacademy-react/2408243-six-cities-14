import {createReducer } from '@reduxjs/toolkit';

import { currentCityAction, placeSortingAction, updateOffersAction } from './actions';
import { offers } from '../mocks/offer';
import { Amsterdam } from '../constants';
import { OfferType } from '../types';
import { PlaceSortingEnum } from '../enums';

type initialStateType = {
  currentCity: string;
  offers: OfferType[];
  placeSorting: PlaceSortingEnum;
};

const initialState: initialStateType = {
  currentCity: Amsterdam.name,
  offers: offers,
  placeSorting: PlaceSortingEnum.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(updateOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(placeSortingAction, (state, action) => {
      state.placeSorting = action.payload;
    });
});


export default reducer;
