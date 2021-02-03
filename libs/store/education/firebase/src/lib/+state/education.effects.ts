import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { SnackbarService } from '@dges/ui/snackbar';

import * as EducationFeature from './education.reducer';
import * as EducationActions from './education.actions';
import { of, from } from 'rxjs';
import { EducationCollectionService } from '@dges/api/education/firebase'
import { switchMap, map, catchError } from 'rxjs/operators';
import { Education, EducationWithTimestamp } from '@dges/types/education';
import firebase from 'firebase';

@Injectable()
export class EducationEffects {
  public loadEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EducationActions.loadEducation),
      switchMap(() => {
        return this.angularFire.getEducation().pipe(
          map((education: EducationWithTimestamp[]) =>
            education.map((education: EducationWithTimestamp) => {
              return {
                ...education,
                endDate: ((education.endDate as unknown) as firebase.firestore.Timestamp).toDate(),
                startDate: ((education.startDate as unknown) as firebase.firestore.Timestamp).toDate(),
              };
            })
          ),
          map((education: Education[]) => EducationActions.loadEducationSuccess({ education: education })),
          catchError((error) => of(EducationActions.loadEducationFailure(error)))
        );
      })
    )
  );
  

  public addEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EducationActions.addEducation),
      switchMap((actionProps) => {
        return from(this.angularFire.addEducation(actionProps.education)).pipe(
          map(() => {
            return EducationActions.addEducationSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(EducationActions.addEducationFailure(error));
          })
        );
      })
    )
  );

  public deleteEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EducationActions.deleteEducation),
      switchMap((actionProps) =>
        from(this.angularFire.deleteEducation(actionProps.education)).pipe(
          map(() => {
            return EducationActions.deleteEducationSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(EducationActions.deleteEducationFailure(error));
          })
        )
      )
    )
  );

  public editEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EducationActions.editEducation),
      switchMap((actionProps) =>
        from(this.angularFire.editEducation(actionProps.education)).pipe(
          map(() => {
            return EducationActions.editEducationSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(EducationActions.editEducationFailure(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private angularFire: EducationCollectionService,
    private snackBar: SnackbarService
  ) {}
}