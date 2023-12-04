import { createReducer } from '@reduxjs/toolkit';

import {
  updateCurrentCityAction,
  placeSortingAction,
  // setOffers,
  something
} from './actions';
// import { offers } from '../mocks/offer';
import { Amsterdam } from '../constants';
import { PlaceSortingEnum } from '../enums';
import { OfferType } from '../types';
// import { fetchOffers } from './api-action';

type initialStateType = {
  currentCity: string;
  offers: OfferType[];
  placeSorting: PlaceSortingEnum;
  isLoading: boolean;
  something:any;
};

const initialState: initialStateType = {
  currentCity: Amsterdam.name,
  // offers: offers,
  offers: [],
  placeSorting: PlaceSortingEnum.Popular,
  isLoading: false,
  something: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCurrentCityAction, (state, action) => {
      console.log('state.currentCity', action.payload);
      state.currentCity = action.payload;
    })
    .addCase(placeSortingAction, (state, action) => {
      console.log('state.placeSorting', action.payload);
      state.placeSorting = action.payload;
    })
    .addCase(something, (state, action) => {
      state.something = action.payload;
    })
    // .addCase(fetchOffers.fulfilled, (state, action) => {
    //   state.offers = action.payload;
    // });
});

export default reducer;
