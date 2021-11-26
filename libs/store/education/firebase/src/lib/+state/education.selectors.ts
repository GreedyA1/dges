import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  EDUCATION_FEATURE_KEY,
  State,
  EducationPartialState,
  educationAdapter,
} from './education.reducer';

// Lookup the 'Education' feature state managed by NgRx
export const getEducationState = createFeatureSelector<
  State
>(EDUCATION_FEATURE_KEY);

const { selectAll, selectEntities } = educationAdapter.getSelectors();

export const getEducationLoaded = createSelector(
  getEducationState,
  (state: State) => state.loaded
);

export const getEducationError = createSelector(
  getEducationState,
  (state: State) => state.error
);

export const getAllEducation = createSelector(
  getEducationState,
  (state: State) => selectAll(state)
);

export const getEducationEntities = createSelector(
  getEducationState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getEducationState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getEducationEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
