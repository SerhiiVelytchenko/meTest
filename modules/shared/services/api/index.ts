import axios from 'axios';
// controllers
import { getPlanetsControllers, getSpeciesControllers, getStarshipsControllers } from './controllers';

export type CustomHeaders = { [key: string]: string };
export type APIVariables = {
  token?: string | null;
  baseURL?: string;
  customHeaders?: CustomHeaders;
};

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_SPECIES_URL = process.env.NEXT_PUBLIC_API_SPECIES_URL;

export const createAPI = ({ baseURL = API_SPECIES_URL, customHeaders = {}, token }: APIVariables = {}) => {
  /* ------------- API instance ------------- */

  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      ...customHeaders,
      ...(token && { Authorization: `Bearer ${token}` })
    },
    timeout: 10000
  });

  /* ------------- Controllers ------------- */

  const getRoot = () => api.get<{ result: string[] }>('/');

  return {
    getRoot,
    // STARSHIPS
    ...getStarshipsControllers(api),
    // PLANETS
    ...getPlanetsControllers(api),
    // Species
    ...getSpeciesControllers(api)
  };
};

export type CreateApi = (config?: APIVariables) => ReturnType<typeof createAPI>;

export * from './helpers';
