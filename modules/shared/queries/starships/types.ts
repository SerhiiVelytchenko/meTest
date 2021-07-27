import { Starship } from '@md-shared/types/starship';

export type Starships = Pick<Starship, 'id' | 'name'>[];

export interface GetStarshipsResponse {
  allStarships: {
    totalCount: number | undefined;
    starships: Starships;
    pageInfo: {
      endCursor: string | undefined;
    };
  };
}
export interface GetStarshipsVariables {
  after?: string | undefined;
  before?: string | undefined;
  first?: number | undefined;
  last?: number | undefined;
}
