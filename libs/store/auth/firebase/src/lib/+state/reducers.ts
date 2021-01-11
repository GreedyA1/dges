import {createReducer, on} from '@ngrx/store';
import {initialAuthState} from './state';
import * as AuthActions from './actions';

export const authFeatureKey = 'auth';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, action) => {
    console.log('this is in reducer', action)
    return {
      ...state,
      user: action.user,
      loaded: true,
      loading: false,
    };
  }),
  on(AuthActions.logoutSuccess, (state, action) => {
    return {
      ...state,
      user: null,
      loaded: true,
      loading: false,
    };
  })
);
