import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, filter, map, take, takeUntil, tap } from 'rxjs/operators'

export interface SnackBarQueueItem {
  message: string;
  beingDispatched: boolean;
  configParams?: MatSnackBarConfig;
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService implements OnDestroy {
  
  private readonly snackBarQueue = new BehaviorSubject<SnackBarQueueItem[]>([]);
  private readonly snackBarQueue$ = this.snackBarQueue.asObservable();
  private readonly ngDestroy = new Subject();
  
  constructor(private _snackBar: MatSnackBar) {
    this.snackBarQueue$
     .pipe(
       filter(queue => queue.length > 0 && !queue[0].beingDispatched),
       tap(() => {
         const updatedQueue = this.snackBarQueue.value;
         updatedQueue[0].beingDispatched = true;
         this.snackBarQueue.next(updatedQueue);
       }),
       map(queue => queue[0]),
       takeUntil(this.ngDestroy))
     .subscribe(snackBarItem => this.showSnackbar(snackBarItem.message, snackBarItem.configParams));
  }

  public ngOnDestroy() {
    this.snackBarQueue.next([]);
    this.snackBarQueue.complete();
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  public queueSnackBar(message: string, configParams?: MatSnackBarConfig) {
    this.snackBarQueue.next(
      this.snackBarQueue.value.concat([{ message, configParams, beingDispatched: false }]),
    );
  }

  private showSnackbar(message: string, configParams?: MatSnackBarConfig) {
    const duration = this.getDuration(configParams);
    this.removeDismissedSnackBar(
      this._snackBar.open(message, 'OK', { duration }).afterDismissed(),
    );
  }

  /* Remove dismissed snack bar from queue and triggers another one to appear */
  private removeDismissedSnackBar(dismissed: Observable<MatSnackBarDismiss>) {
    dismissed
      .pipe(
        delay(1000),
        take(1))
      .subscribe(() => {
        const updatedQueue = this.snackBarQueue.value;
        if (updatedQueue[0].beingDispatched) updatedQueue.shift();
        this.snackBarQueue.next(updatedQueue);
      });
  }

  private getDuration(configParams?: MatSnackBarConfig): number {
    if (configParams && configParams.duration) return configParams.duration;
    else return 10000;
  }

  openSnackBar(message: string, action: string, durationInSeconds: number): void {
    this._snackBar.open(message, action, {
      duration: durationInSeconds * 1000,
    });
  }
}
