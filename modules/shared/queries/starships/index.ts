import { gql } from '@apollo/client';

export const GET_STARSHIPS_QUERY = gql`
  query AllStarships($after: String) {
    allStarships(first: 5, after: $after) {
      pageInfo {
        endCursor
      }
      totalCount
      starships {
        id
        name
      }
    }
  }
`;
