import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './state';
import * as AuthActions from './actions';

import { FirebaseAuthService } from '@dges/api/auth/firebase';

export const authFeatureKey = 'auth';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, action) => {
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
