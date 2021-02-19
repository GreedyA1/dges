import {
  BreakpointObserver,
  BreakpointState,
  MediaMatcher,
} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@dges/ui/login-dialog';
import { AuthFacade } from '@dges/store/auth/firebase';
import { Observable } from 'rxjs';
import { User } from '@dges/types/auth';

@Component({
  selector: 'dges-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'DGes';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public fillerNav = [];
  public user$: Observable<User>;
  public showFullMenu: boolean;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog,
    router: Router,
    private authFacade: AuthFacade,
    public breakpointObserver: BreakpointObserver
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.fillerNav.push(...router.config.filter((route) => route.path));
    this.user$ = this.authFacade.loadUser()

    this.breakpointObserver
      .observe(['(min-width: 850px)'])
      .subscribe((state: BreakpointState) => {
        this.showFullMenu = state.matches;
      });
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authFacade.login(
          result.emailFormControl,
          result.passwordFormControl
        );
      }
    });
  }

  logout(): void {
    this.authFacade.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
