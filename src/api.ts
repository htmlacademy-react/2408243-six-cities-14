import axios, { AxiosInstance} from 'axios';

const BASE_URL = 'https://14.design.pages.academy/six-cities';
const TIMEOUT = 500;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  return api;
};
