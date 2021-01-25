import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ToolsCollectionService } from '@dges/api/skills/firebase';
import { SnackbarService } from '@dges/ui/snackbar';
import * as ToolsActions from './tools.actions';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ToolsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToolsActions.init),
      switchMap(() =>
        this.angularFire.getTools().pipe(
          map((action) => {
            return ToolsActions.loadToolsSuccess({ tools: action });
          }),
          catchError((error) => of(ToolsActions.loadToolsFailure(error)))
        )
      )
    )
  );

  public addTool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToolsActions.addTool),
      switchMap((actionProps) =>
        from(this.angularFire.addTool(actionProps.tool)).pipe(
          map(() => {
            return ToolsActions.addToolSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ToolsActions.addToolFail(error));
          })
        )
      )
    )
  );

  public deleteTool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToolsActions.deleteTool),
      switchMap((actionProps) =>
        from(this.angularFire.deleteTool(actionProps.tool)).pipe(
          map(() => {
            return ToolsActions.deleteToolSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ToolsActions.deleteToolFail(error));
          })
        )
      )
    )
  );

  public editTool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToolsActions.editTool),
      switchMap((actionProps) =>
        from(this.angularFire.editTool(actionProps.tool)).pipe(
          map(() => {
            return ToolsActions.editToolSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ToolsActions.editToolFail(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private angularFire: ToolsCollectionService,
    private snackBar: SnackbarService
  ) {}
}
