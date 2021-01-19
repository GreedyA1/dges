import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as UploadActions from './upload.actions';
import * as UploadFeature from './upload.reducer';
import * as UploadSelectors from './upload.selectors';
import { UploadFacade } from '@dges/types/facades/upload-facade';

@Injectable()
export class FirebaseUploadFacade implements UploadFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UploadSelectors.getUploadLoaded));
  allUpload$ = this.store.pipe(select(UploadSelectors.getAllUpload));
  selectedUpload$ = this.store.pipe(select(UploadSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init(files: File[]) {
    this.store.dispatch(UploadActions.init({ files: files }));
  }

  cleanUploads() {
    this.store.dispatch(UploadActions.cleanUploads());
  }
}
