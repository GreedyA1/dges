import { Project } from '@dges/types/project';
import {createAction, props} from '@ngrx/store';

export const loadProjects = createAction('[projects] LOAD_PROJECTS');
export const loadProjectsSuccess = createAction(
  '[projects] LOAD_PROJECTS_SUCCESS',
  props<{ projects: Project[] }>()
);
export const loadProjectsFail = createAction(
  '[projects] LOAD_PROJECTS_FAIL',
  props<{ error: Error }>()
);
export const addProject = createAction(
  '[projects] ADD_PROJECTS',
  props<{ project: Project }>()
);

export const addProjectSuccess = createAction(
  '[projects] ADD_PROJECTS_SUCCESS',
  props<{ project: unknown }>()
);

export const addProjectFail = createAction(
  '[projects] ADD_PROJECTS_FAIL',
  props<{ error: Error }>()
);
