import { Injectable } from '@angular/core';
import { Education } from '@dges/types/education';
import { Actions, ofType } from '@ngrx/effects';

import { select, Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as EducationActions from './education.actions';
import * as EducationFeature from './education.reducer';
import * as EducationSelectors from './education.selectors';

@Injectable()
export class EducationFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(EducationSelectors.getEducationLoaded));
  allEducation$ = this.store.pipe(select(EducationSelectors.getAllEducation));
  selectedEducation$ = this.store.pipe(select(EducationSelectors.getSelected));

  constructor(private store: Store, private actions$: Actions) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  loadEducation(): Observable<Education[]> {
    this.store.dispatch(EducationActions.loadEducation());
    return this.allEducation$;
  }

  addEducation(education: Education) {
    this.store.dispatch(EducationActions.addEducation({ education: education }));
  }

  editEducation(education: Education) {
    this.store.dispatch(EducationActions.editEducation({ education: education }));
  }

  deleteEducation(education: Education) {
    this.store.dispatch(EducationActions.deleteEducation({ education: education }));
  }

  editOrAddSuccess(): Observable<Actions> {
    return this.actions$.pipe(
      ofType(EducationActions.addEducationSuccess, EducationActions.editEducationSuccess)
    );
  }
}
