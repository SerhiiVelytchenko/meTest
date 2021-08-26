import { combineReducers } from 'redux';
// local
import * as getKind from './get-kind';
import * as getSpecies from './get-species';

export type SpeciesAPIReducers = {
  getKind: getKind.InitialState;
  getSpecies: getSpecies.InitialState;
};

export const speciesReducers = combineReducers<SpeciesAPIReducers>({
  getKind: getKind.reducer,
  getSpecies: getSpecies.reducer
});

export { getKind, getSpecies };
