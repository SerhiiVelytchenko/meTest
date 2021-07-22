import React from 'react';
// libs
import { useQuery } from '@apollo/client';
// utils
import * as U from '@md-utils';
// types
import { GetVehiclesVariables, Vehicles } from '@md-queries/vehicles/types';
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
  const { data, loading, error, refetch, fetchMore } = useQuery(GET_VEHICLES_QUERY, {
    variables: { after: null }
  });

  const refetchVehicles = async (variables?: Partial<GetVehiclesVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allStarships.starships : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const y = () => {
    const { endCursor } = data.allStarships.pageInfo;

    fetchMore({
      variables: {
        after: endCursor
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.allStarships.starships = [
          ...prevResult.allStarships.starships,
          ...fetchMoreResult.allStarships.starships
        ];
        return fetchMoreResult;
      }
    });
  };

  // setTimeout(y, 1200);
  return (
    <VehiclesAPIContext.Provider
      value={{
        vehicles: data ? data.allStarships.starships : [],
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
