import { createAction, props } from '@ngrx/store';
import { EducationEntity } from './education.models';

export const loadEducation = createAction(
  '[Education page] Load Education'
);

export const loadEducationSuccess = createAction(
  '[Education/API] Load Education Success',
  props<{ education: EducationEntity[] }>()
);

export const loadEducationFailure = createAction(
  '[Education/API] Load Education Failure',
  props<{ error: any }>()
);

export const addEducation = createAction(
  '[Education page] Add Education',
  props<{ education: unknown }>()
);

export const addEducationSuccess = createAction(
  '[Education/API] Add Education Success'
);

export const addEducationFailure = createAction(
  '[Education/API] Add Education Failure',
  props<{ error: any }>()
);

export const editEducation = createAction(
  '[Education page] Edit Education',
  props<{ education: unknown }>()
);

export const editEducationSuccess = createAction(
  '[Education/API] Edit Education Success'
);

export const editEducationFailure = createAction(
  '[Education/API] Edit Education Failure',
  props<{ error: any }>()
);

export const deleteEducation = createAction(
  '[Education page] Delete Education',
  props<{ education: unknown }>()
);

export const deleteEducationSuccess = createAction(
  '[Education/API] Delete Education Success'
);

export const deleteEducationFailure = createAction(
  '[Education/API] Delete Education Failure',
  props<{ error: any }>()
);
