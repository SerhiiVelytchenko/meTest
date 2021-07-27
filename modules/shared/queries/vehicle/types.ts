import * as P from '@md-shared/types/vehicle';

export type Vehicle = Pick<
  P.Vehicle,
  'id' | 'name' | 'costInCredits' | 'cargoCapacity' | 'maxAtmospheringSpeed' | 'model' | 'passengers' | 'vehicleClass'
>;

export interface GetVehicleResponse {
  vehicle: Vehicle;
}

export interface GetVehicleVariables {
  id?: string;
  vehicleId?: string;
}
