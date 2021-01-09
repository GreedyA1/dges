import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from "@angular/fire/auth";
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from "@dges/ui/login-dialog";


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

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog,
    router: Router,
    public auth: AngularFireAuth
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.fillerNav.push(
      ...router.config.filter((route) => route.path).map((route) => route.path)
    );
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.auth.signInWithEmailAndPassword(result.emailFormControl, result.passwordFormControl)
      }
    });
  }

  logout(): void {
    this.auth.signOut();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
