import React from 'react';
// utils
import * as U from '@md-utils';
// libs
import { useQuery } from '@apollo/client';
// queries
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// types
import { GetStarshipsResponse, GetStarshipsVariables, Starships } from '@md-queries/starships/types';
import { ClientError } from '@md-utils/errors/custom';

interface Context {
  starships: Starships;
  error?: ClientError<string>;
  isLoading: boolean;
  refetch: (variables?: GetStarshipsVariables) => Promise<ClientError<string> | Starships>;
  addNewPositions: () => void;
  totalCount: number;
}

const StarshipsAPIContext = React.createContext<Context>({
  starships: [],
  isLoading: false,
  error: undefined,
  refetch: () => Promise.resolve([] as Starships),
  addNewPositions: () => {},
  totalCount: 0
});

const StarshipsAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading, refetch, fetchMore, error } = useQuery<GetStarshipsResponse, GetStarshipsVariables>(
    GET_STARSHIPS_QUERY,
    {
      variables: { after: '' }
    }
  );

  const refetchStarships = async (variables?: GetStarshipsVariables) => {
    try {
      const result = await refetch(variables);
      return result.data ? result.data.allStarships.starships : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const addNewPositions = () => {
    const endCursor = data?.allStarships.pageInfo.endCursor;

    fetchMore({
      variables: {
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
  };

  const value = {
    starships: data ? data.allStarships.starships : [],
    error: error ? U.errors.parseAndCreateClientError(error) : undefined,
    isLoading: loading,
    refetch: refetchStarships,
    addNewPositions,
    totalCount: data?.allStarships.totalCount || 0
  };

  return <StarshipsAPIContext.Provider value={value}>{children}</StarshipsAPIContext.Provider>;
};

export { StarshipsAPIContextProvider, StarshipsAPIContext };
