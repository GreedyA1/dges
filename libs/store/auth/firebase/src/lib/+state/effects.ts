import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { FirebaseAuthService } from '@dges/api/auth/firebase';
import * as AuthActions from './actions';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import { User } from '@dges/types/auth';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        from(this.authFire.login(action.email, action.password)).pipe(
          map((userCredential: UserCredential) => {
            const a: User = {
              email: userCredential.user.email,
              displayName: userCredential.user.displayName,
            };
            return AuthActions.loginSuccess({ user: a });
          }),
          catchError((error) => {
            return of(AuthActions.loginFail(error));
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() =>
        from(this.authFire.logout()).pipe(
          map(() => {
            return AuthActions.logoutSuccess();
          }),
          catchError((error) => {
            return of(AuthActions.loginFail(error));
          })
        )
      )
    )
  );

  laodUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUser),
      switchMap(() =>
        from(this.authFire.user$).pipe(
          map(user => {
            const a: User = {
              email: user.email,
              displayName: user.displayName,
            };
            return AuthActions.loginSuccess({user: a});
          }),
          catchError((error) => {
            return of(AuthActions.loginFail(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authFire: FirebaseAuthService
  ) {}
}
