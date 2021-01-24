import { createFeatureSelector, createSelector } from '@ngrx/store';
import { projectsFeatureKey } from './reducers';
import { ProjectsState } from './state';

const getProjects = createFeatureSelector<ProjectsState>(projectsFeatureKey);
export const getProjectsData = createSelector(
  getProjects,
  (state: ProjectsState) => state.projects
);
export const getProjectsLoaded = createSelector(
  getProjects,
  (state: ProjectsState) => state.loaded
);
export const getProjectsLoading = createSelector(
  getProjects,
  (state: ProjectsState) => state.loading
);

export const projectsQuery = {
  getProjectsData,
  getProjectsLoaded,
  getProjectsLoading,
};
