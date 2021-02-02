import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEducation from './+state/education.reducer';
import { EducationEffects } from './+state/education.effects';
import { EducationFacade } from './+state/education.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEducation.EDUCATION_FEATURE_KEY,
      fromEducation.reducer
    ),
    EffectsModule.forFeature([EducationEffects]),
  ],
  providers: [EducationFacade],
})
export class StoreEducationFirebaseModule {}
