import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { UploadEntity } from './upload.models';
import { UploadEffects } from './upload.effects';
import { UploadFacade } from './upload.facade';

import * as UploadSelectors from './upload.selectors';
import * as UploadActions from './upload.actions';
import {
  UPLOAD_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './upload.reducer';

interface TestSchema {
  upload: State;
}

describe('UploadFacade', () => {
  let facade: UploadFacade;
  let store: Store<TestSchema>;
  const createUploadEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UploadEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UPLOAD_FEATURE_KEY, reducer),
          EffectsModule.forFeature([UploadEffects]),
        ],
        providers: [UploadFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(UploadFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allUpload$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allUpload$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadUploadSuccess` to manually update list
     */
    it('allUpload$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allUpload$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          UploadActions.loadUploadSuccess({
            upload: [createUploadEntity('AAA'), createUploadEntity('BBB')],
          })
        );

        list = await readFirst(facade.allUpload$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
