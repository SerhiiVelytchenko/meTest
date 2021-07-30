import { gql } from '@apollo/client';

export const GET_STARSHIPS_QUERY = gql`
  query AllStarships($after: String, $first: Int) {
    allStarships(first: $first, after: $after) {
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
