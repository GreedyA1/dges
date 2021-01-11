import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from "@dges/ui/login-dialog";
import {Store} from "@ngrx/store";
import {RootStoreModule} from "./+store/root-store.module";
import {AuthActions, AuthSelectors} from "../../../../libs/store/auth/firebase/src/lib/+state";
import {Observable} from "rxjs";
import {User} from "@dges/types/auth";
import { skip, tap } from 'rxjs/operators';
import {AngularFireAuth} from "@angular/fire/auth";


@Component({
  selector: 'dges-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'dges-front';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public fillerNav = [];
  public user$: Observable<User>

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog,
    router: Router,
    private store: Store<RootStoreModule>,
    // private auth: AngularFireAuth
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.fillerNav.push(
      ...router.config.filter((route) => route.path).map((route) => route.path)
    );
    this.user$ = this.store.select(AuthSelectors.getCurrentUser).pipe(
      // skip(1)
      tap(console.log)
    );
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.auth.signInWithEmailAndPassword(result.emailFormControl, result.passwordFormControl).then( res =>
        //   console.log('THISS ISSS ', res)
        // )
        this.store.dispatch(AuthActions.login({email: result.emailFormControl, password: result.passwordFormControl}));
      }
    });
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
