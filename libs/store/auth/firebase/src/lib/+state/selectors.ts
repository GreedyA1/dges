import { createFeatureSelector, createSelector } from '@ngrx/store';
import {authFeatureKey} from './reducers';
import { AuthState } from './state';

const getUser = createFeatureSelector<AuthState>(authFeatureKey);
export const getCurrentUser = createSelector(
  getUser,
  (state: AuthState) => state.user
);
export const getUserLoaded = createSelector(
  getUser,
  (state: AuthState) => state.loaded
);

export const projectsQuery = {
  getCurrentUser,
  getUserLoaded,
};
