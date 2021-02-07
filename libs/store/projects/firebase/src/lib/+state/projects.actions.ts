import { createAction, props } from '@ngrx/store';
import { ProjectsEntity } from './projects.models';

export const loadProjects = createAction('[Projects Page] Init');

export const loadProjectsSuccess = createAction(
  '[Projects/API] Load Projects Success',
  props<{ projects: ProjectsEntity[] }>()
);

export const loadProjectsFailure = createAction(
  '[Projects/API] Load Projects Failure',
  props<{ error: any }>()
);

export const addProject = createAction(
  '[add-projects] ADD_PROJECTS',
  props<{ project: unknown }>()
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
