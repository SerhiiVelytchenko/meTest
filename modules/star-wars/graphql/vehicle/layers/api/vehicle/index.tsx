import React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@apollo/client';
import * as U from '@md-utils';
// types
import { ClientError } from '@md-utils/errors/custom';
import { GetVehicleResponse, GetVehicleVariables, Vehicle } from '@md-queries/vehicle/types';
// queries
import { GET_VEHICLE_QUERY } from '@md-queries/vehicle';

interface Context {
  vehicle?: Vehicle;
  isLoading: boolean;
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetVehicleVariables>) => Promise<ClientError<string> | Vehicle | undefined>;
}

const VehicleAPIContext = React.createContext<Context>({
  vehicle: undefined,
  isLoading: false,
  error: undefined,
  refetch: () => Promise.resolve({} as Vehicle)
});

const VehicleAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();
  const { data, loading, error, refetch } = useQuery<GetVehicleResponse, GetVehicleVariables>(GET_VEHICLE_QUERY, {
    variables: { id: query.id as string },
    skip: !query.id
  });

  const refetchVehicle = async (variables?: Partial<GetVehicleVariables>) => {
    try {
      const result = await refetch(variables);
      return result.data?.vehicle;
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  return (
    <VehicleAPIContext.Provider
      value={{
        vehicle: data ? data.vehicle : undefined,
        isLoading: loading,
        error: error ? U.errors.parseAndCreateClientError(error) : undefined,
        refetch: refetchVehicle
      }}
    >
      {children}
    </VehicleAPIContext.Provider>
  );
};

export { VehicleAPIContextProvider, VehicleAPIContext };
