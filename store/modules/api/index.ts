import { combineReducers } from 'redux';
// local
import * as starships from '../api/starships';
import * as planets from '../api/planets';
import * as species from '../api/species';

export type APIReducers = {
  starships: starships.StarshipsAPIReducers;
  planets: planets.PlanetsAPIReducers;
  species: species.SpeciesAPIReducers;
};

export const apiReducers = combineReducers<APIReducers>({
  starships: starships.starshipsReducers,
  planets: planets.planetsReducers,
  species: species.speciesReducers
});

export { starships, planets, species };
