export interface Project {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  link: string;
  tools: string[];
  images: string[];
  skills: string[];
}

export interface ProjectWithTimestamp {
  id: string;
  title: string;
  description: string;
  startDate: unknown;
  endDate: unknown;
  link: string;
  tools: string[];
  images: string[];
  skills: string[];
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

