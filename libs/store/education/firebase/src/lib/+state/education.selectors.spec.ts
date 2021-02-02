import { EducationEntity } from './education.models';
import { State, educationAdapter, initialState } from './education.reducer';
import * as EducationSelectors from './education.selectors';

describe('Education Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEducationId = (it) => it['id'];
  const createEducationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EducationEntity);

  let state;

  beforeEach(() => {
    state = {
      education: educationAdapter.setAll(
        [
          createEducationEntity('PRODUCT-AAA'),
          createEducationEntity('PRODUCT-BBB'),
          createEducationEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Education Selectors', () => {
    it('getAllEducation() should return the list of Education', () => {
      const results = EducationSelectors.getAllEducation(state);
      const selId = getEducationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = EducationSelectors.getSelected(state);
      const selId = getEducationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getEducationLoaded() should return the current 'loaded' status", () => {
      const result = EducationSelectors.getEducationLoaded(state);

      expect(result).toBe(true);
    });

    it("getEducationError() should return the current 'error' state", () => {
      const result = EducationSelectors.getEducationError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
