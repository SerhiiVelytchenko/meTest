import { AxiosInstance } from 'axios';

export type KindTech = {
  uid: string;
  name: string;
  url: string;
};

export interface GetSpeciesResponse {
  results: KindTech[];
}

export interface KindTechProperties {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export const getSpeciesControllers = (api: AxiosInstance) => {
  return {
    getSpecies: () => api.get<GetSpeciesResponse>('/species'),
    getKind: (id: string) => api.get<KindTechProperties>(`/species/${id}`)
  };
};
