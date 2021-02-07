import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PROJECTS_FEATURE_KEY } from './projects.reducers';
import { ProjectsState } from './projects.state';

const getProjects = createFeatureSelector<ProjectsState>(PROJECTS_FEATURE_KEY);
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
