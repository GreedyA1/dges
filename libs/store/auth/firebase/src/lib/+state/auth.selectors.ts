import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, AUTH_FEATURE_KEY } from './auth.reducer';

const getUser = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);
export const getCurrentUser = createSelector(
  getUser,
  (state: AuthState) => state.user
);
export const getUserLoaded = createSelector(
  getUser,
  (state: AuthState) => state.loaded
);
