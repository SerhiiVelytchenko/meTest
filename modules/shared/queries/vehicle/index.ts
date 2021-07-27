import { gql } from '@apollo/client';

export const GET_VEHICLE_QUERY = gql`
  query GetVehicle($id: ID, $vehicleID: ID) {
    vehicle(id: $id, vehicleID: $vehicleID) {
      id
      name
      cargoCapacity
      costInCredits
      maxAtmospheringSpeed
      passengers
      vehicleClass
      model
    }
  }
`;
