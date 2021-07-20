import { gql } from '@apollo/client';

export const GET_VEHICLES_QUERY = gql`
  query AllStarships($after: String, $first: Int, $before: String, $last: Int) {
    allStarships(after: $after, first: $first, before: $before, last: $last) {
      totalCount
      starships {
        id
        name
      }
    }
  }
`;
