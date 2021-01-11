import { AuthState } from '@dges/store/auth/firebase';
import { ProjectsState } from '@dges/store/projects/projects-firebase';

export interface RootState {
  projects: ProjectsState.ProjectsState;
  auth: AuthState.AuthState
}

export const initialRootState: RootState = {
  projects: ProjectsState.initialProjectsState,
  auth: AuthState.initialAuthState
};
