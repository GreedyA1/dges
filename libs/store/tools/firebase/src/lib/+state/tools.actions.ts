import { createAction, props } from '@ngrx/store';
import { ToolsEntity } from './tools.models';
import { Skill } from '@dges/types/skill';

export const init = createAction('[Tools Page] Init');

export const getTools = createAction('[Tools/API] Load Tools');

export const loadToolsSuccess = createAction(
  '[Tools/API] Load Tools Success',
  props<{ tools: ToolsEntity[] }>()
);

export const loadToolsFailure = createAction(
  '[Tools/API] Load Tools Failure',
  props<{ error: any }>()
);
export const addTool = createAction(
  '[add-tools] ADD_TOOLS',
  props<{ tool: Skill }>()
);

export const addToolSuccess = createAction(
  '[add-tools] ADD_TOOLS_SUCCESS'
);

export const addToolFail = createAction(
  '[add-tools] ADD_TOOLS_FAIL',
  props<{ error: Error }>()
);
export const deleteTool = createAction(
  '[tools page] DELETE_TOOLS',
  props<{ tool: unknown }>()
);

export const deleteToolSuccess = createAction(
  '[tools page] DELETE_TOOLS_SUCCESS'
);

export const deleteToolFail = createAction(
  '[tools page] DELETE_TOOLS_FAIL',
  props<{ error: Error }>()
);

export const editTool = createAction(
  '[add-tools] EDIT_TOOLS',
  props<{ tool: unknown }>()
);

export const editToolSuccess = createAction(
  '[add-tools] EDIT_TOOLS_SUCCESS'
);

export const editToolFail = createAction(
  '[add-tools] EDIT_TOOLS_FAIL',
  props<{ error: Error }>()
);