import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUpload from './+state/upload.reducer';
import { UploadEffects } from './+state/upload.effects';
import { FirebaseUploadFacade } from './+state/upload.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUpload.UPLOAD_FEATURE_KEY, fromUpload.reducer),
    EffectsModule.forFeature([UploadEffects]),
  ],
  providers: [FirebaseUploadFacade],
})
export class StoreStorageFirebaseModule {}
