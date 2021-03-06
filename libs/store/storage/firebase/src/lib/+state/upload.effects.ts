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
  upload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.upload),
      fetch({
        run: (action) => {
          const uploads: UploadEntity[] = [];
          action.files.forEach((file) => {
            uploads.push({
              id: new Date().getTime() + file.name,
              ...this.firebaseStorage.startUpload(file, action.folderName),
            });
          });
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
