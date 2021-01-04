import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import * as ProjectActions from './actions'
import { ProjectsCollectionService } from '@dges/api/projects/firebase';



@Injectable()
export class ProjectsEffects {

  loadProjects = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.loadProjects),
      switchMap(action =>
        this.angularFire.projectsGet().pipe(
          map((project) => {
            return ProjectActions.loadProjectsSuccess({ projects: project })}),
          catchError(error => {
              return of(ProjectActions.loadProjectsFail(error))
          })
        )
      )
    ),
  );

  constructor(private actions$: Actions, private angularFire: ProjectsCollectionService) {}

}
