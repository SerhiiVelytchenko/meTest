import * as V from '@md-modules/starships/types/vehicle/index';

export type Vehicle = Pick<V.Vehicle, 'id' | 'name'>;
export type Vehicles = Vehicle[];

export interface GetVehiclesResponse {
  allStarships: {
    starships: Vehicles;
    totalCount: number;
  };
}

export interface GetVehiclesVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
