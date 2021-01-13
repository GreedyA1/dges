import { Project } from '@dges/types/project';
import { createAction, props } from '@ngrx/store';

export const loadProjects = createAction('[projects page] LOAD_PROJECTS');
export const loadProjectsSuccess = createAction(
  '[projects page] LOAD_PROJECTS_SUCCESS',
  props<{ projects: unknown[] }>()
);
export const loadProjectsFail = createAction(
  '[projects page] LOAD_PROJECTS_FAIL',
  props<{ error: Error }>()
);
export const addProject = createAction(
  '[add-projects] ADD_PROJECTS',
  props<{ project: Project }>()
);

export const addProjectSuccess = createAction(
  '[add-projects] ADD_PROJECTS_SUCCESS'
);

export const addProjectFail = createAction(
  '[add-projects] ADD_PROJECTS_FAIL',
  props<{ error: Error }>()
);
export const deleteProject = createAction(
  '[projects page] DELETE_PROJECTS',
  props<{ project: unknown }>()
);

export const deleteProjectSuccess = createAction(
  '[projects page] DELETE_PROJECTS_SUCCESS'
);

export const deleteProjectFail = createAction(
  '[projects page] DELETE_PROJECTS_FAIL',
  props<{ error: Error }>()
);

export const editProject = createAction(
  '[add-projects] EDIT_PROJECTS',
  props<{ project: unknown }>()
);

export const editProjectSuccess = createAction(
  '[add-projects] EDIT_PROJECTS_SUCCESS'
);

export const editProjectFail = createAction(
  '[add-projects] EDIT_PROJECTS_FAIL',
  props<{ error: Error }>()
);
