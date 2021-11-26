import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';

import { UploadEffects } from './upload.effects';
import * as UploadActions from './upload.actions';
import { hot } from 'jasmine-marbles';

describe('UploadEffects', () => {
  let actions: Observable<any>;
  let effects: UploadEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UploadEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UploadEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UploadActions.init() });

      const expected = hot('-a-|', {
        a: UploadActions.loadUploadSuccess({ upload: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
