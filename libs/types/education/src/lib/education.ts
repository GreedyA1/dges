export interface Education {
  id: string | number;
  title: string;
  image: string;
  educationLevel?: string;
  major?: string;
  minor?: string;
  startDate: Date;
  endDate: Date;
  courses: string[];
}

export interface EducationWithTimestamp {
  id: string | number;
  title: string;
  image: string;
  educationLevel?: string;
  major?: string;
  minor?: string;
  startDate: unknown;
  endDate: unknown;
  courses: string[];
}

export const EMPTY_EDUCATION: Education = {
  id: null,
  title: null,
  image: null,
  educationLevel: null,
  major: null,
  minor: null,
  courses: [],
  startDate: null,
  endDate: null,
};
