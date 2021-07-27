import React from 'react';
// libs
import { useQuery } from '@apollo/client';
// utils
import * as U from '@md-utils';
// types
import { GetVehiclesResponse, GetVehiclesVariables, Vehicles } from '@md-queries/vehicles/types';
import { ClientError } from '@md-utils/errors/custom';
// queries
import { GET_VEHICLES_QUERY } from '@md-queries/vehicles';

interface Context {
  vehicles: Vehicles;
  isLoading: boolean;
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetVehiclesVariables>) => Promise<ClientError<string> | Vehicles>;
}

const VehiclesAPIContext = React.createContext<Context>({
  vehicles: [],
  isLoading: false,
  error: undefined,
  refetch: () => Promise.resolve([] as Vehicles)
});

const VehiclesAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading, refetch, error } = useQuery<GetVehiclesResponse, GetVehiclesVariables>(GET_VEHICLES_QUERY, {
    variables: { first: 5 }
  });

  const refetchVehicles = async (variables?: Partial<GetVehiclesVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allVehicles.vehicles : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  return (
    <VehiclesAPIContext.Provider
      value={{
        vehicles: data ? data.allVehicles.vehicles : [],
        error: error ? U.errors.parseAndCreateClientError(error) : undefined,
        isLoading: loading,
        refetch: refetchVehicles
      }}
    >
      {children}
    </VehiclesAPIContext.Provider>
  );
};

export { VehiclesAPIContextProvider, VehiclesAPIContext };
