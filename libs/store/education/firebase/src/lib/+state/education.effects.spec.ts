import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';

import { EducationEffects } from './education.effects';
import * as EducationActions from './education.actions';
import { hot } from 'jasmine-marbles';

describe('EducationEffects', () => {
  let actions: Observable<any>;
  let effects: EducationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        EducationEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(EducationEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: EducationActions.init() });

      const expected = hot('-a-|', {
        a: EducationActions.loadEducationSuccess({ education: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
