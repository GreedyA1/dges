import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromJobs from './+state/jobs.reducer';
import { JobsEffects } from './+state/jobs.effects';
import { JobsFacade } from './+state/jobs.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromJobs.JOBS_FEATURE_KEY, fromJobs.reducer),
    EffectsModule.forFeature([JobsEffects]),
  ],
  providers: [JobsFacade],
})
export class StoreJobsFirebaseModule {}
