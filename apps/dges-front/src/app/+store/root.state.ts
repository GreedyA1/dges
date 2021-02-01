import { AuthState } from '@dges/store/auth/firebase';
import { State as JobsState, initialState as initialJobsState } from '@dges/store/jobs/firebase';
import { ProjectsState } from '@dges/store/projects/projects-firebase';

export interface RootState {
  projects: ProjectsState.ProjectsState;
  jobs: JobsState;
  auth: AuthState.AuthState;
}

export const initialRootState: RootState = {
  projects: ProjectsState.initialProjectsState,
  jobs: initialJobsState,
  auth: AuthState.initialAuthState,
};
