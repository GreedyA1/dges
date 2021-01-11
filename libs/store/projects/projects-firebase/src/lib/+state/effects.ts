import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as ProjectActions from './actions';
import { ProjectsCollectionService } from '@dges/api/projects/firebase';

@Injectable()
export class ProjectsEffects {
  loadProjects = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.loadProjects),
      switchMap(() =>
        this.angularFire.projectsGet().pipe(
          map((project) => {
            return ProjectActions.loadProjectsSuccess({ projects: project });
          }),
          catchError((error) => {
            return of(ProjectActions.loadProjectsFail(error));
          })
        )
      )
    )
  );

  addProject = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.addProject),
      switchMap((project) =>
        from(this.angularFire.addProject(project)).pipe(
          map((project) => {
            return ProjectActions.addProjectSuccess({ project: project });
          }),
          catchError((error) => {
            return of(ProjectActions.addProjectFail(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private angularFire: ProjectsCollectionService
  ) {}
}
