import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SkillsEffects } from './skills.effects';
import * as SkillsActions from './skills.actions';

describe('SkillsEffects', () => {
  let actions: Observable<any>;
  let effects: SkillsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SkillsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(SkillsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SkillsActions.init() });

      const expected = hot('-a-|', {
        a: SkillsActions.loadSkillsSuccess({ skills: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
