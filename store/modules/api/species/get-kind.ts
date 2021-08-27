import {
  ClientError,
  clientError,
  RequestError,
  ClientSuccess,
  clientSuccess,
  getRequestError
} from '@md-modules/shared/services/api/helpers';
import { createAction, ThunkAction } from '@md-store/helpers';
import { KindTechProperties } from '@md-shared/services/api/controllers/species';

/* ------------- Types ------------- */

export const GET_KIND_LOADING = '@kind/GET_KIND_LOADING';
export const GET_KIND_ERROR = '@kind/GET_KIND_ERROR';
export const GET_KIND_SUCCESS = '@kind/GET_KIND_SUCCESS';

/* ------------- Types and Action Creators ------------- */

export const setGetKindLoadingAction = createAction<typeof GET_KIND_LOADING, boolean>(GET_KIND_LOADING);

export type SetGetKindLoadingAction = ReturnType<typeof setGetKindLoadingAction>;

export const setGetKindErrorAction = createAction<typeof GET_KIND_ERROR, string>(GET_KIND_ERROR);

export type SetGetKindErrorAction = ReturnType<typeof setGetKindErrorAction>;

export const setGetKindSuccessAction = createAction<typeof GET_KIND_SUCCESS, KindTechProperties>(GET_KIND_SUCCESS);

export type SetGetKindSuccessAction = ReturnType<typeof setGetKindSuccessAction>;

type Actions = SetGetKindLoadingAction | SetGetKindErrorAction | SetGetKindSuccessAction;

/* ------------- Initial State ------------- */

export type InitialState = {
  loading: boolean;
  error: null | string;
  data: KindTechProperties | null;
};

export const INITIAL_STATE: InitialState = {
  loading: false,
  error: null,
  data: null
};

/* ------------- Thunks ------------- */

export const performAPIGetKind = (
  id: string
): ThunkAction<
  typeof GET_KIND_LOADING | typeof GET_KIND_ERROR | typeof GET_KIND_SUCCESS,
  Promise<ClientSuccess<KindTechProperties> | ClientError<RequestError>>
> => async (dispatch, getState, createApi) => {
  const api = createApi();

  try {
    dispatch(setGetKindLoadingAction(true));

    const { data } = await api.getKind(id);

    dispatch(setGetKindSuccessAction(data));

    return clientSuccess(data);
  } catch (error: any) {
    const errorMap = getRequestError(error);

    dispatch(setGetKindErrorAction(error.message));

    return clientError(errorMap);
  } finally {
    dispatch(setGetKindLoadingAction(false));
  }
};

/* ------------- Hookup Reducers To Types ------------- */

export function reducer(state = INITIAL_STATE, action: Actions): InitialState {
  switch (action.type) {
    case GET_KIND_SUCCESS:
      return {
        ...state,
        data: action.payload || null,
        error: null
      };
    case GET_KIND_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_KIND_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
