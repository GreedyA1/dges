import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as ProjectActions from './actions';
import { ProjectsCollectionService } from '@dges/api/projects/firebase';
import { Project, ProjectWithTimestamp } from '@dges/types/project';
import firebase from 'firebase';
import { SnackbarService } from '@dges/ui/snackbar';

@Injectable()
export class ProjectsEffects {
  public loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.loadProjects),
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
            ProjectActions.loadProjectsSuccess({ projects: projects })
          ),
          catchError((error) => of(ProjectActions.loadProjectsFail(error)))
        )
      )
    )
  );

  public addProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.addProject),
      switchMap((actionProps) =>
        from(this.angularFire.addProject(actionProps.project)).pipe(
          map(() => {
            return ProjectActions.addProjectSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ProjectActions.addProjectFail(error));
          })
        )
      )
    )
  );

  public deleteProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.deleteProject),
      switchMap((actionProps) =>
        from(this.angularFire.deleteProject(actionProps.project)).pipe(
          map(() => {
            return ProjectActions.deleteProjectSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ProjectActions.deleteProjectFail(error));
          })
        )
      )
    )
  );

  public editProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.editProject),
      switchMap((actionProps) =>
        from(this.angularFire.editProject(actionProps.project)).pipe(
          map(() => {
            return ProjectActions.editProjectSuccess();
          }),
          catchError((error) => {
            this.snackBar.queueSnackBar(error.message);
            return of(ProjectActions.editProjectFail(error));
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
