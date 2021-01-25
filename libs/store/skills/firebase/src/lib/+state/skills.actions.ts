import { createAction, props } from '@ngrx/store';
import { SkillsEntity } from './skills.models';
import { Skill } from '@dges/types/skill';

export const init = createAction('[Skills Page] Init');

export const getSkills = createAction('[Skills/API] Load Skills');

export const loadSkillsSuccess = createAction(
  '[Skills/API] Load Skills Success',
  props<{ skills: SkillsEntity[] }>()
);

export const loadSkillsFailure = createAction(
  '[Skills/API] Load Skills Failure',
  props<{ error: any }>()
);
export const addSkill = createAction(
  '[add-skills] ADD_SKILLS',
  props<{ skill: Skill }>()
);

export const addSkillSuccess = createAction(
  '[add-skills] ADD_SKILLS_SUCCESS'
);

export const addSkillFail = createAction(
  '[add-skills] ADD_SKILLS_FAIL',
  props<{ error: Error }>()
);
export const deleteSkill = createAction(
  '[skills page] DELETE_SKILLS',
  props<{ skill: unknown }>()
);

export const deleteSkillSuccess = createAction(
  '[skills page] DELETE_SKILLS_SUCCESS'
);

export const deleteSkillFail = createAction(
  '[skills page] DELETE_SKILLS_FAIL',
  props<{ error: Error }>()
);

export const editSkill = createAction(
  '[add-skills] EDIT_SKILLS',
  props<{ skill: unknown }>()
);

export const editSkillSuccess = createAction(
  '[add-skills] EDIT_SKILLS_SUCCESS'
);

export const editSkillFail = createAction(
  '[add-skills] EDIT_SKILLS_FAIL',
  props<{ error: Error }>()
);
