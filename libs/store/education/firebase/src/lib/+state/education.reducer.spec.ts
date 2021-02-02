import { EducationEntity } from './education.models';
import * as EducationActions from './education.actions';
import { State, initialState, reducer } from './education.reducer';

describe('Education Reducer', () => {
  const createEducationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EducationEntity);

  beforeEach(() => {});

  describe('valid Education actions', () => {
    it('loadEducationSuccess should return set the list of known Education', () => {
      const education = [
        createEducationEntity('PRODUCT-AAA'),
        createEducationEntity('PRODUCT-zzz'),
      ];
      const action = EducationActions.loadEducationSuccess({ education });

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
