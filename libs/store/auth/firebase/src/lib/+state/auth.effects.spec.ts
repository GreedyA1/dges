import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';

import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';
import { hot } from 'jasmine-marbles';

describe('AuthEffects', () => {
  let actions: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(AuthEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthActions.login({ email: 'string', password: 'string' }) });

      const expected = hot('-a-|', {
        // a: AuthActions.loginSuccess({ user:  }),
      });

      expect(effects.login$).toBeObservable(expected);
    });
  });
});
