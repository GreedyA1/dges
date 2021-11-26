import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';

import { ToolsEffects } from './tools.effects';
import * as ToolsActions from './tools.actions';
import { hot } from 'jasmine-marbles';

describe('ToolsEffects', () => {
  let actions: Observable<any>;
  let effects: ToolsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ToolsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ToolsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ToolsActions.init() });

      const expected = hot('-a-|', {
        a: ToolsActions.loadToolsSuccess({ tools: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
