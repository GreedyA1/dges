import { ProjectsState } from '@dges/store/projects/projects-firebase';

export interface ProjectsRootState {
  projects: ProjectsState.ProjectsState;
}

export const initialProjectsRootState = {
  projects: [],
};
