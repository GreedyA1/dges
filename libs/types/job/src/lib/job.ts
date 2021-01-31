import { Skill } from '@dges/types/skill';
import { Project } from '@dges/types/project';

export interface Job {
  id: string | number;
  title: string;
  description: string;
  achievements: string[];
  startDate: Date;
  endDate: Date;
  link: string;
  images: string[];
  tools: Skill[];
  skills: Skill[];
  position: Position[];
  projects: Project[];
}

export interface Position {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface JobWithTimestamp {
  id: string | number;
  title: string;
  description: string;
  achievements: string[];
  startDate: unknown;
  endDate: unknown;
  link: string;
  images: string[];
  tools: Skill[];
  skills: Skill[];
  position: Position[];
  projects: Project[];
}

export const EMPTY_JOB: Job = {
  id: null,
  title: null,
  description: null,
  achievements: [],
  startDate: null,
  endDate: null,
  link: null,
  images: [],
  tools: [],
  skills: [],
  position: [],
  projects: [],
};
