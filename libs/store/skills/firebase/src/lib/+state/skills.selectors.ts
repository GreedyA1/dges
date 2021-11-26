import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SKILLS_FEATURE_KEY,
  State,
  SkillsPartialState,
  skillsAdapter,
} from './skills.reducer';

// Lookup the 'Skills' feature state managed by NgRx
export const getSkillsState = createFeatureSelector< State>(
  SKILLS_FEATURE_KEY
);

const { selectAll, selectEntities } = skillsAdapter.getSelectors();

export const getSkillsLoaded = createSelector(
  getSkillsState,
  (state: State) => state.loaded
);

export const getSkillsError = createSelector(
  getSkillsState,
  (state: State) => state.error
);

export const getAllSkills = createSelector(getSkillsState, (state: State) =>
  selectAll(state)
);

export const getSkillsEntities = createSelector(
  getSkillsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getSkillsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getSkillsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
