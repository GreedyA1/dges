import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SkillsEntity } from './skills.models';
import { SkillsEffects } from './skills.effects';
import { SkillsFacade } from './skills.facade';

import * as SkillsSelectors from './skills.selectors';
import * as SkillsActions from './skills.actions';
import {
  SKILLS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './skills.reducer';

interface TestSchema {
  skills: State;
}

describe('SkillsFacade', () => {
  let facade: SkillsFacade;
  let store: Store<TestSchema>;
  const createSkillsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SkillsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SKILLS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SkillsEffects]),
        ],
        providers: [SkillsFacade],
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
      facade = TestBed.get(SkillsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkills$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allSkills$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSkillsSuccess` to manually update list
     */
    it('allSkills$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkills$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          SkillsActions.loadSkillsSuccess({
            skills: [createSkillsEntity('AAA'), createSkillsEntity('BBB')],
          })
        );

        list = await readFirst(facade.allSkills$);
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
