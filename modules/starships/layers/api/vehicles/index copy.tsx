import React, { useEffect } from 'react';
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
  const { data, loading, error, refetch, fetchMore } = useQuery(GET_VEHICLES_QUERY, {
    variables: {
      first: 5
      // offset: 0,
      // limit: 15
    }
    // fetchPolicy: "cache-and-network"
  });
  // useEffect(() => {
  //   function onLoadMore() {
  //     fetchMore({
  //       variables: {
  //         first: 10
  //       },
  //       updateQuery: (prev, { fetchMoreResult }) => {
  //         if (!fetchMoreResult) return prev;
  //         return Object.assign({}, prev, {
  //           posts: [...prev.allStarships.starships, ...fetchMoreResult.allStarships.starships]
  //         });
  //       }
  //     });
  //   }
  //   setTimeout(onLoadMore, 900);
  // }, []);

  const getHasNextPage = (data: { allStarships: { totalCount: any } }) => data.allStarships.totalCount <= 36; //true:?????????????????????????

  const getAfter = (data) =>
    data.allStarships.starships && data.allStarships.starships > 0
      ? data.allStarships.starships[data.allStarships.starships.length - 2].id
      : null;

  const updateQuery = (previousResult, { fetchMoreResult }) => {
    if (!fetchMoreResult) {
      return previousResult;
    }

    const previousEdges = previousResult.allStarships.starships;
    const fetchMoreEdges = fetchMoreResult.allStarships.starships;

    fetchMoreResult.allStarships.starships = [...previousEdges, ...fetchMoreEdges];

    return { ...fetchMoreResult };
  };

  useEffect(() => {
    if (data && fetchMore) {
      const nextPage = getHasNextPage(data);
      const after = getAfter(data);

      if (nextPage && after !== null) {
        fetchMore({ updateQuery, variables: { after } });
      }
    }
  }, [data, fetchMore, updateQuery]);

  const refetchVehicles = async (variables?: Partial<GetVehiclesVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allStarships.starships : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

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
