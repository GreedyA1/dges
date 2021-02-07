import { Injectable } from '@angular/core';
import { Project } from '@dges/types/project';
import { Actions, ofType } from '@ngrx/effects';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ProjectsActions from './projects.actions';
import * as ProjectsFeature from './projects.reducer';
import * as ProjectsSelectors from './projects.selectors';

@Injectable()
export class ProjectsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ProjectsSelectors.getProjectsLoaded));
  allProjects$ = this.store.pipe(select(ProjectsSelectors.getAllProjects));
  selectedProjects$ = this.store.pipe(select(ProjectsSelectors.getSelected));

  constructor(private store: Store, private actions$: Actions) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  loadProjects() {
    this.store.dispatch(ProjectsActions.loadProjects());
  }

  addProject(project: Project) {
    this.store.dispatch(ProjectsActions.addProject({ project: project }));
  }

  editProject(project: Project) {
    this.store.dispatch(ProjectsActions.editProject({ project: project }));
  }

  deleteProject(project: Project) {
    this.store.dispatch(ProjectsActions.deleteProject({ project: project }));
  }

  editOrAddSuccess(): Observable<Actions> {
    return this.actions$.pipe(
      ofType(
        ProjectsActions.addProjectSuccess,
        ProjectsActions.editProjectSuccess
      )
    );
  }
}
