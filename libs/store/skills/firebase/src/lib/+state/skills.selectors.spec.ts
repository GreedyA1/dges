import { SkillsEntity } from './skills.models';
import { State, skillsAdapter, initialState } from './skills.reducer';
import * as SkillsSelectors from './skills.selectors';

describe('Skills Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSkillsId = (it) => it['id'];
  const createSkillsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SkillsEntity);

  let state;

  beforeEach(() => {
    state = {
      skills: skillsAdapter.setAll(
        [
          createSkillsEntity('PRODUCT-AAA'),
          createSkillsEntity('PRODUCT-BBB'),
          createSkillsEntity('PRODUCT-CCC'),
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

  describe('Skills Selectors', () => {
    it('getAllSkills() should return the list of Skills', () => {
      const results = SkillsSelectors.getAllSkills(state);
      const selId = getSkillsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SkillsSelectors.getSelected(state);
      const selId = getSkillsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSkillsLoaded() should return the current 'loaded' status", () => {
      const result = SkillsSelectors.getSkillsLoaded(state);

      expect(result).toBe(true);
    });

    it("getSkillsError() should return the current 'error' state", () => {
      const result = SkillsSelectors.getSkillsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
