import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { EducationEntity } from './education.models';
import { EducationEffects } from './education.effects';
import { EducationFacade } from './education.facade';

import * as EducationSelectors from './education.selectors';
import * as EducationActions from './education.actions';
import {
  EDUCATION_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './education.reducer';

interface TestSchema {
  education: State;
}

describe('EducationFacade', () => {
  let facade: EducationFacade;
  let store: Store<TestSchema>;
  const createEducationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EducationEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(EDUCATION_FEATURE_KEY, reducer),
          EffectsModule.forFeature([EducationEffects]),
        ],
        providers: [EducationFacade],
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
      facade = TestBed.get(EducationFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allEducation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allEducation$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadEducationSuccess` to manually update list
     */
    it('allEducation$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allEducation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          EducationActions.loadEducationSuccess({
            education: [
              createEducationEntity('AAA'),
              createEducationEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allEducation$);
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
