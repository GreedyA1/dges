import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { FirebaseStorageService } from '@dges/api/storage/firebase';
import { AngularFireUploadTask } from '@angular/fire/storage';

import * as UploadFeature from './upload.reducer';
import * as UploadActions from './upload.actions';
import { UploadEntity } from './upload.models';

@Injectable()
export class UploadEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.init),
      fetch({
        run: (action) => {
          const uploads: UploadEntity[] = [];
          action.files.forEach((file) => {
            uploads.push({
              id: new Date().getTime(),
              ...this.firebaseStorage.startUpload(file),
            });
          });
          console.log(uploads[0]);
          return UploadActions.loadUploadSuccess({
            upload: uploads,
          });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UploadActions.loadUploadFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private firebaseStorage: FirebaseStorageService
  ) {}
}
