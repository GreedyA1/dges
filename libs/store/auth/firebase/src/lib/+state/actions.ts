import { createAction, props } from '@ngrx/store';
import { User } from '@dges/types/auth';

export const loadUser = createAction(
  '[OnStart]'
);
export const login = createAction(
  '[auth] LOGIN',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  '[auth] LOGIN_SUCCESS',
  props<{ user: User }>()
);
export const loginFail = createAction(
  '[auth] LOGIN_FAIL',
  props<{ error: Error }>()
);

export const logout = createAction('[auth] LOGOUT');
export const logoutSuccess = createAction('[auth] LOGOUT_SUCCESS');
export const logoutFail = createAction(
  '[auth] LOGOUT_FAIL',
  props<{ error: Error }>()
);
