import { Skill } from '@dges/types/skill';

export interface Project {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  link: string;
  images: string[];
  tools: Skill[];
  skills: Skill[];
}

export interface ProjectWithTimestamp {
  id: string;
  title: string;
  description: string;
  startDate: unknown;
  endDate: unknown;
  link: string;
  images: string[];
  tools: Skill[];
  skills: Skill[];
}

export const EMPTY_PROJECT: Project = {
  id: null,
  title: null,
  description: null,
  startDate: null,
  endDate: null,
  link: null,
  tools: [],
  images: [],
  skills: [],
};
