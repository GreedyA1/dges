import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'dges-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'dges-front';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public fillerNav = []

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.fillerNav.push(...router.config.filter(route => route.path).map(route => route.path))
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
