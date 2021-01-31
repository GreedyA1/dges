import { createAction, props } from '@ngrx/store';
import { JobsEntity } from './jobs.models';

export const init = createAction('[Jobs Page] Init');

export const loadJobs = createAction(
  '[Jobs page] Load Jobs'
);

export const loadJobsSuccess = createAction(
  '[Jobs/API] Load Jobs Success',
  props<{ jobs: JobsEntity[] }>()
);

export const loadJobsFailure = createAction(
  '[Jobs/API] Load Jobs Failure',
  props<{ error: any }>()
);

export const addJob = createAction(
  '[Jobs page] Add Jobs',
  props<{ job: unknown }>()
);

export const addJobSuccess = createAction(
  '[Jobs/API] Add Jobs Success'
);

export const addJobFailure = createAction(
  '[Jobs/API] Add Jobs Failure',
  props<{ error: any }>()
);

export const editJob = createAction(
  '[Jobs page] Edit Jobs',
  props<{ job: unknown }>()
);

export const editJobSuccess = createAction(
  '[Jobs/API] Edit Jobs Success'
);

export const editJobFailure = createAction(
  '[Jobs/API] Edit Jobs Failure',
  props<{ error: any }>()
);

export const deleteJob = createAction(
  '[Jobs page] Delete Jobs',
  props<{ job: unknown }>()
);

export const deleteJobSuccess = createAction(
  '[Jobs/API] Delete Jobs Success'
);

export const deleteJobFailure = createAction(
  '[Jobs/API] Delete Jobs Failure',
  props<{ error: any }>()
);
