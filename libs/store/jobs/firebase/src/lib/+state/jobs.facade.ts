import { Injectable } from '@angular/core';
import { Job } from '@dges/types/job';
import { Actions, ofType } from '@ngrx/effects';

import { select, Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as JobsActions from './jobs.actions';
import * as JobsFeature from './jobs.reducer';
import * as JobsSelectors from './jobs.selectors';

@Injectable()
export class JobsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(JobsSelectors.getJobsLoaded));
  allJobs$ = this.store.pipe(select(JobsSelectors.getAllJobs));
  selectedJobs$ = this.store.pipe(select(JobsSelectors.getSelected));

  constructor(private store: Store, private actions$: Actions) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(JobsActions.init());
  }

  addJob(job: Job) {
    this.store.dispatch(JobsActions.addJob({ job: job }));
  }

  editJob(job: Job) {
    this.store.dispatch(JobsActions.editJob({ job: job }));
  }

  deleteJob(job: Job) {
    this.store.dispatch(JobsActions.deleteJob({ job: job }));
  }

  editOrAddSuccess(): Observable<Actions> {
    return this.actions$.pipe(
      ofType(JobsActions.addJobSuccess, JobsActions.editJobSuccess)
    );
  }
}
