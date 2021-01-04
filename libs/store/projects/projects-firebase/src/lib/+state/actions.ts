import { createAction, props } from '@ngrx/store';
import {Project} from "@dges/types/project";

export const loadProjects = createAction('[projects] LOAD_PROJECTS');
export const loadProjectsSuccess = createAction('[projects] LOAD_PROJECTS_SUCCESS', props<{ projects: any }>());
export const loadProjectsFail = createAction('[projects] LLOAD_PROJECTS_FAIL', props<{ error: Error }>());
export const addProject = createAction('[projects] ADD_PROJECTS', props<{ slug: string }>());
