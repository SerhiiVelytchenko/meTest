import { gql } from '@apollo/client';

export const GET_VEHICLES_QUERY = gql`
  query AllStarships {
    allStarships(first: 5) {
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
//, $offset: Int!   , offset: $offset

export const GET_VEHICLES_QUERY_1 = gql`
  query AllStarships($cursor: String, $limit: Int!) {
    allStarships(cursor: $cursor, limit: $limit) {
      cursor
      starships {
        id
        name
      }
    }
  }
`;
