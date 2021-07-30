import React from 'react';
// utils
import * as U from '@md-utils';
// libs
import { NetworkStatus, useQuery } from '@apollo/client';
// queries
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// types
import { GetStarshipsResponse, GetStarshipsVariables, Starships } from '@md-queries/starships/types';
import { ClientError } from '@md-utils/errors/custom';

// shouldn't be void
interface Context {
  starships: Starships;
  error?: ClientError<string>;
  isLoading: boolean;
  isLoadingFetchMore: boolean;
  totalCount: number;
  refetch: (variables?: GetStarshipsVariables) => Promise<ClientError<string> | Starships>;
  fetchMore: (variables?: GetStarshipsVariables) => Promise<ClientError<string> | Starships | undefined>;
}

const StarshipsAPIContext = React.createContext<Context>({
  starships: [],
  error: undefined,
  isLoading: false,
  isLoadingFetchMore: false,
  totalCount: 0,
  refetch: () => Promise.resolve([] as Starships),
  fetchMore: () => Promise.resolve([] as Starships)
});

const StarshipsAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading, error, networkStatus, refetch, fetchMore } = useQuery<
    GetStarshipsResponse,
    GetStarshipsVariables
  >(GET_STARSHIPS_QUERY, {
    variables: {
      first: 5,
      after: ''
    },
    notifyOnNetworkStatusChange: true
  });

  const isLoadingFetchMore = networkStatus === NetworkStatus.fetchMore;

  const refetchStarships = async (variables?: GetStarshipsVariables) => {
    try {
      const result = await refetch(variables);
      return result.data ? result.data.allStarships.starships : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const handlerFetchMore = async (variables?: GetStarshipsVariables) => {
    const endCursor = data?.allStarships.pageInfo.endCursor;
    try {
      await fetchMore({
        variables: {
          ...variables,
          after: endCursor
        },
        updateQuery: (prevResult, { fetchMoreResult = prevResult }) => {
          fetchMoreResult.allStarships.starships = [
            ...prevResult.allStarships.starships,
            ...fetchMoreResult.allStarships.starships
          ];

          return fetchMoreResult;
        }
      });
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const value = {
    starships: data ? data.allStarships.starships : [],
    error: error ? U.errors.parseAndCreateClientError(error) : undefined,
    isLoading: loading,
    isLoadingFetchMore,
    totalCount: data?.allStarships.totalCount || 0,
    refetch: refetchStarships,
    fetchMore: handlerFetchMore
  };

  return <StarshipsAPIContext.Provider value={value}>{children}</StarshipsAPIContext.Provider>;
};

export { StarshipsAPIContextProvider, StarshipsAPIContext };
