import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, setOffers } from './actions';
import axios, { AxiosInstance } from 'axios';
import { State } from '.';
import { ApiRouter } from '../enums/Routers';
import { OfferType } from '../types';


export const getOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(ApiRouter.Offers);
    dispatch(setOffers(data));
    // return data;
  },
);

export const fetchOffers = createAsyncThunk(
  'offers',
  async () => {
    const response = await axios.get('https://14.design.pages.academy/six-cities/offers');
    return response;
  }
);
