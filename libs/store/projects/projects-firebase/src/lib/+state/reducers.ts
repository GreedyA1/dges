import { createReducer, on } from '@ngrx/store';
import { initialProjectsState } from './state';
import * as ProjectsActions from './actions';

export const projectsFeatureKey = 'projects';

export const projectsReducer = createReducer(
  initialProjectsState,
  on(ProjectsActions.loadProjectsSuccess, (state, action) => {
    return {
      ...state,
      projects: action.projects,
      loaded: true,
      loading: false,
    };
  })
  // on(ProjectsCollectionService.projectsStateChanges(), (state, action) => ({
  //   ...state,
  //   projects: action.projects,
  //   loaded: true,
  //   loading: false,
  // })),
);

// export function projectsReducer(state: ProjectsState | undefined, action: Action): ProjectsState {
//   return reducer(state, action);
// }
