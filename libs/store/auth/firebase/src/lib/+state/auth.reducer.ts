import { User } from '@dges/types/auth';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  user: User;
  loaded: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  user: null,
  loaded: false,
  error: null,
};

const authReducer = createReducer(
  initialState,
  on(
    AuthActions.loginSuccess,
    AuthActions.loadUserSuccess,
    (state, payload) => {
      return {
        ...state,
        user: payload.user,
        loaded: true,
        loading: false,
      };
    }
  ),
  on(AuthActions.logoutSuccess, (state) => {
    return {
      ...state,
      user: null,
      loaded: true,
      loading: false,
    };
  })
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
