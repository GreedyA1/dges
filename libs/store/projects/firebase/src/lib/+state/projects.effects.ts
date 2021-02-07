import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ProjectsFeature from './projects.reducer';
import * as ProjectsActions from './projects.actions';

import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ProjectsCollectionService } from '@dges/api/projects/firebase';
import { Project, ProjectWithTimestamp } from '@dges/types/project';
import firebase from 'firebase';
import { SnackbarService } from '@dges/ui/snackbar';

@Injectable()
export class ProjectsEffects {
  public loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.loadProjects),
      switchMap(() =>
        this.angularFire.getProjects().pipe(
          map((projects: ProjectWithTimestamp[]) =>
            projects.map((project: ProjectWithTimestamp) => {
              return {
                ...project,
                endDate: ((project.endDate as unknown) as firebase.firestore.Timestamp).toDate(),
                startDate: ((project.startDate as unknown) as firebase.firestore.Timestamp).toDate(),
              };
            })
          ),
          map((projects: Project[]) =>
            ProjectsActions.loadProjectsSuccess({ projects: projects })
          ),
          catchError((error) => of(ProjectsActions.loadProjectsFailure(error)))
        )
      )
    )
  );

  public addProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.addProject),
      switchMap((actionProps) =>
        from(this.angularFire.addProject(actionProps.project)).pipe(
          map(() => {
            return ProjectsActions.addProjectSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ProjectsActions.addProjectFail(error));
          })
        )
      )
    )
  );

  public deleteProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.deleteProject),
      switchMap((actionProps) =>
        from(this.angularFire.deleteProject(actionProps.project)).pipe(
          map(() => {
            return ProjectsActions.deleteProjectSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ProjectsActions.deleteProjectFail(error));
          })
        )
      )
    )
  );

  public editProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.editProject),
      switchMap((actionProps) =>
        from(this.angularFire.editProject(actionProps.project)).pipe(
          map(() => {
            return ProjectsActions.editProjectSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ProjectsActions.editProjectFail(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private angularFire: ProjectsCollectionService,
    private snackBar: SnackbarService
  ) {}
}
