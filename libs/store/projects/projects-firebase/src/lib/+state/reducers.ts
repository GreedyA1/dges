import { Action, createReducer, on } from '@ngrx/store';
import { initialProjectsState, ProjectsState } from './state';
import * as ProjectsActions from './actions';

export const projectsFeatureKey = 'projects';

export const projectsReducer = createReducer(
  initialProjectsState,
  on(ProjectsActions.loadProjectsSuccess, (state, action) => {
    console.log('THIS IS ACTION', action);
    return {
      ...state,
      data: action.projects,
      loaded: true,
      loading: false,
    };
  })
  // on(ProjectsCollectionService.projectsStateChanges(), (state, action) => ({
  //   ...state,
  //   data: action.projects,
  //   loaded: true,
  //   loading: false,
  // })),
);

// export function projectsReducer(state: ProjectsState | undefined, action: Action): ProjectsState {
//   return reducer(state, action);
// }
