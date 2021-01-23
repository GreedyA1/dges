import { Injectable } from '@angular/core';
import { Skill } from '@dges/types/skill';

import { select, Store, Action } from '@ngrx/store';

import * as SkillsActions from './skills.actions';
import * as SkillsFeature from './skills.reducer';
import * as SkillsSelectors from './skills.selectors';

@Injectable()
export class SkillsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SkillsSelectors.getSkillsLoaded));
  allSkills$ = this.store.pipe(select(SkillsSelectors.getAllSkills));
  selectedSkills$ = this.store.pipe(select(SkillsSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    console.log('in facade');
    this.store.dispatch(SkillsActions.init());
  }

  addSkill(skill: Skill) {
    this.store.dispatch(SkillsActions.addSkill({ skill: skill }));
  }

  editSkill(skill: Skill) {
    this.store.dispatch(SkillsActions.editSkill({ skill: skill }));
  }

}
