import {
  ClientError,
  clientError,
  RequestError,
  ClientSuccess,
  clientSuccess,
  getRequestError
} from '@md-shared/services/api/helpers';
import { GetSpeciesResponse } from '@md-shared/services/api/controllers';
import { createAction, ThunkAction } from '@md-store/helpers';

/* ------------- Types ------------- */

export const GET_SPECIES_LOADING = '@planets/GET_SPECIES_LOADING';
export const GET_SPECIES_ERROR = '@planets/GET_SPECIES_ERROR';
export const GET_SPECIES_SUCCESS = '@planets/GET_SPECIES_SUCCESS';

/* ------------- Types and Action Creators ------------- */

export const setGetSpeciesLoadingAction = createAction<typeof GET_SPECIES_LOADING, boolean>(GET_SPECIES_LOADING);

export type SetGetSpeciesLoadingAction = ReturnType<typeof setGetSpeciesLoadingAction>;

export const setGetSpeciesErrorAction = createAction<typeof GET_SPECIES_ERROR, string>(GET_SPECIES_ERROR);

export type SetGetSpeciesErrorAction = ReturnType<typeof setGetSpeciesErrorAction>;

export const setGetSpeciesSuccessAction = createAction<typeof GET_SPECIES_SUCCESS, GetSpeciesResponse>(
  GET_SPECIES_SUCCESS
);

export type SetGetSpeciesSuccessAction = ReturnType<typeof setGetSpeciesSuccessAction>;

type Actions = SetGetSpeciesLoadingAction | SetGetSpeciesErrorAction | SetGetSpeciesSuccessAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  loading: boolean;
  error: null | string;
  data: GetSpeciesResponse | null;
};

export const INITIAL_STATE: InitialState = {
  loading: false,
  error: null,
  data: null
};

/* ------------- Thunks ------------- */

export const performAPIGetSpecies = (): ThunkAction<
  typeof GET_SPECIES_LOADING | typeof GET_SPECIES_ERROR | typeof GET_SPECIES_SUCCESS,
  Promise<ClientSuccess<GetSpeciesResponse> | ClientError<RequestError>>
> => async (dispatch, getState, createApi) => {
  const api = createApi();
  try {
    dispatch(setGetSpeciesLoadingAction(true));
    const { data } = await api.getSpecies();

    dispatch(setGetSpeciesSuccessAction(data));

    return clientSuccess(data);
  } catch (error: any) {
    const errorMap = getRequestError(error);

    dispatch(setGetSpeciesErrorAction(error.message));

    return clientError(errorMap);
  } finally {
    dispatch(setGetSpeciesLoadingAction(false));
  }
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_SPECIES_SUCCESS:
      return {
        ...state,
        data: action.payload || null,
        error: null
      };
    case GET_SPECIES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_SPECIES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
