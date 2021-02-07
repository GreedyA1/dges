import { Project } from '@dges/types/project';

export interface ProjectsState {
  loading: boolean;
  loaded: boolean;
  projects: Project[];
}

export const initialProjectsState: ProjectsState = {
  loading: false,
  loaded: false,
  projects: [],
};
