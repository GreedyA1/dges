import { createAction, props } from '@ngrx/store';
import { UploadEntity } from './upload.models';

export const init = createAction('[Upload Page] Init',
props<{ files: File[] }>());

export const loadUploadSuccess = createAction(
  '[Upload/API] Load Upload Success',
  props<{ upload: UploadEntity[] }>()
);

export const loadUploadFailure = createAction(
  '[Upload/API] Load Upload Failure',
  props<{ error: any }>()
);
