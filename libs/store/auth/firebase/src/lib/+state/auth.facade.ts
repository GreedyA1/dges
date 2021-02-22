import { Injectable } from '@angular/core';
import { User } from '@dges/types/auth';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  user$: Observable<User> = this.store.pipe(
    select(AuthSelectors.getCurrentUser)
  );
  loaded$: Observable<boolean> = this.store.pipe(
    select(AuthSelectors.getUserLoaded)
  );

  constructor(private store: Store) {}

  loadUser(): Observable<User> {
    this.store.dispatch(AuthActions.loadUser());
    return this.user$;
  }

  login(email: string, password: string): Observable<User> {
    this.store.dispatch(AuthActions.login({ email, password }));
    return this.user$;
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
