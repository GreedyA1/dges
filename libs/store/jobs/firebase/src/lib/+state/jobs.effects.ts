import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { JobsCollectionService } from '@dges/api/jobs/firebase';
import { SnackbarService } from '@dges/ui/snackbar';

import * as JobsFeature from './jobs.reducer';
import * as JobsActions from './jobs.actions';
import { from, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Job, JobWithTimestamp } from '@dges/types/job';
import firebase from 'firebase';

@Injectable()
export class JobsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.loadJobs),
      switchMap(() => {
        return this.angularFire.getJobs().pipe(
          map((jobs: JobWithTimestamp[]) =>
            jobs.map((job: JobWithTimestamp) => {
              return {
                ...job,
                endDate: ((job.endDate as unknown) as firebase.firestore.Timestamp).toDate(),
                startDate: ((job.startDate as unknown) as firebase.firestore.Timestamp).toDate(),
              };
            })
          ),
          map((jobs: Job[]) => JobsActions.loadJobsSuccess({ jobs: jobs })),
          catchError((error) => of(JobsActions.loadJobsFailure(error)))
        );
      })
    )
  );

  public addJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.addJob),
      switchMap((actionProps) => {
        return from(this.angularFire.addJob(actionProps.job)).pipe(
          map(() => {
            return JobsActions.addJobSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(JobsActions.addJobFailure(error));
          })
        );
      })
    )
  );

  public deleteJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.deleteJob),
      switchMap((actionProps) =>
        from(this.angularFire.deleteJob(actionProps.job)).pipe(
          map(() => {
            return JobsActions.deleteJobSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(JobsActions.deleteJobFailure(error));
          })
        )
      )
    )
  );

  public editJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.editJob),
      switchMap((actionProps) =>
        from(this.angularFire.editJob(actionProps.job)).pipe(
          map(() => {
            return JobsActions.editJobSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(JobsActions.editJobFailure(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private angularFire: JobsCollectionService,
    private snackBar: SnackbarService
  ) {}
}
