import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { SkillsCollectionService } from '@dges/api/skills/firebase';
import { SnackbarService } from '@dges/ui/snackbar';

import * as SkillsFeature from './skills.reducer';
import * as SkillsActions from './skills.actions';
import { Skill } from '@dges/types/skill';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class SkillsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return SkillsActions.loadSkillsSuccess({ skills: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillsActions.loadSkillsFailure({ error });
        },
      })
    )
  );

  public addSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.addSkill),
      switchMap((actionProps) =>
        from(this.angularFire.addSkill(actionProps.skill)).pipe(
          map(() => {
            return SkillsActions.addSkillSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(SkillsActions.addSkillFail(error));
          })
        )
      )
    )
  );

  public deleteSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.deleteSkill),
      switchMap((actionProps) =>
        from(this.angularFire.deleteSkill(actionProps.skill)).pipe(
          map(() => {
            return SkillsActions.deleteSkillSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(SkillsActions.deleteSkillFail(error));
          })
        )
      )
    )
  );

  public editSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.editSkill),
      switchMap((actionProps) =>
        from(this.angularFire.editSkill(actionProps.skill)).pipe(
          map(() => {
            return SkillsActions.editSkillSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(SkillsActions.editSkillFail(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private angularFire: SkillsCollectionService,
    private snackBar: SnackbarService
  ) {}
}
