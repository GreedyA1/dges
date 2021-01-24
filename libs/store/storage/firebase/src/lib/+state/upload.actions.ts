import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { createAction, props } from '@ngrx/store';
import { UploadEntity } from './upload.models';

export const upload = createAction(
  '[Upload Page] upload',
  props<{ files: File[]; folderName: string }>()
);

export const loadUploadSuccess = createAction(
  '[Upload/API] Load Upload Success',
  props<{ upload: any[] }>()
);

export const loadUploadFailure = createAction(
  '[Upload/API] Load Upload Failure',
  props<{ error: any }>()
);

export const cleanUploads = createAction('[Upload Page] Init');
