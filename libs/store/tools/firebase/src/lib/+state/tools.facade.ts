import { Injectable } from '@angular/core';
import { Skill } from '@dges/types/skill';
import { Actions, ofType } from '@ngrx/effects';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ToolsActions from './tools.actions';
import * as ToolsSelectors from './tools.selectors';

@Injectable()
export class ToolsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ToolsSelectors.getToolsLoaded));
  allTools$ = this.store.pipe(select(ToolsSelectors.getAllTools));
  selectedTools$ = this.store.pipe(select(ToolsSelectors.getSelected));

  constructor(private store: Store, private actions$: Actions) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ToolsActions.init());
  }

  addTool(tool: Skill) {
    this.store.dispatch(ToolsActions.addTool({ tool: tool }));
  }

  editTool(tool: Skill) {
    this.store.dispatch(ToolsActions.editTool({ tool: tool }));
  }

  deleteTool(tool: Skill) {
    this.store.dispatch(ToolsActions.deleteTool({ tool: tool }));
  }

  editOrAddSuccess(): Observable<Actions> {
    return this.actions$.pipe(
      ofType(ToolsActions.addToolSuccess, ToolsActions.editToolSuccess)
    );
  }
}
