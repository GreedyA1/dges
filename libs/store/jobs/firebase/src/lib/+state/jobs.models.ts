import { Job } from '@dges/types/job';

/**
 * Interface for the 'Jobs' data
 */
export interface JobsEntity extends Job {
  id: string | number; // Primary ID
}
