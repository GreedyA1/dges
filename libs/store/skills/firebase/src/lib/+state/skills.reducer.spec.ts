import { SkillsEntity } from './skills.models';
import * as SkillsActions from './skills.actions';
import { State, initialState, reducer } from './skills.reducer';

describe('Skills Reducer', () => {
  const createSkillsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SkillsEntity);

  beforeEach(() => {});

  describe('valid Skills actions', () => {
    it('loadSkillsSuccess should return set the list of known Skills', () => {
      const skills = [
        createSkillsEntity('PRODUCT-AAA'),
        createSkillsEntity('PRODUCT-zzz'),
      ];
      const action = SkillsActions.loadSkillsSuccess({ skills });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
