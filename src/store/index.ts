import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({ reducer });

type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const selectSortingParameter = (state: State) => state.placeSorting;
export const currentOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.currentCity);
