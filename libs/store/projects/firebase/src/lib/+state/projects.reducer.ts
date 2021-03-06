import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProjectsActions from './projects.actions';
import { ProjectsEntity } from './projects.models';

export const PROJECTS_FEATURE_KEY = 'projects';

export interface State extends EntityState<ProjectsEntity> {
  selectedId?: string | number; // which Projects record has been selected
  loaded: boolean; // has the Projects list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProjectsPartialState {
  readonly [PROJECTS_FEATURE_KEY]: State;
}

export const projectsAdapter: EntityAdapter<ProjectsEntity> = createEntityAdapter<
  ProjectsEntity
>();

export const initialState: State = projectsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.loadProjects, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProjectsActions.loadProjectsSuccess, (state, { projects }) =>
    projectsAdapter.setAll(projects, { ...state, loaded: true })
  ),
  on(ProjectsActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return projectsReducer(state, action);
}
