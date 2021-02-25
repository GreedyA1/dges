import { createAction, props } from '@ngrx/store';
import { User } from '@dges/types/auth';
import firebase from 'firebase';
import AuthError = firebase.auth.Error;

export const loadUser = createAction('[OnStart]');
export const loadUserSuccess = createAction(
  '[OnStart LOAD_USER_SUCCESS]',
  props<{ user: User }>()
);
export const loadUserFail = createAction('[OnStart LOAD_USER_FAIL]');
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
  props<{ error: AuthError }>()
);

export const logout = createAction('[auth] LOGOUT');
export const logoutSuccess = createAction('[auth] LOGOUT_SUCCESS');
export const logoutFail = createAction(
  '[auth] LOGOUT_FAIL',
  props<{ error: AuthError }>()
);

export const redirectOnLogin = createAction('[auth] redirectOnLogin');
export const redirectOnLoginSuccess = createAction('[auth] redirectOnLogin');