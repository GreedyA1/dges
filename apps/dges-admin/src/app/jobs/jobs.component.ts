import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AuthFacade} from '@dges/store/auth/firebase';
import { JobsFacade } from '@dges/store/jobs/firebase';
import { User } from '@dges/types/auth';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { Job } from '@dges/types/job';
import { ConfirmDialogComponent } from '@dges/ui/confirm-dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreModule } from '../root-store.module';
import { AddJobComponent } from '../admin/add-job/add-job.component';

@Component({
  selector: 'dges-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  user$: Observable<User>;
  jobs$: Observable<Job[]>;
  loading$: Observable<boolean>;


  constructor(
    private authFacade: AuthFacade,
    public dialog: MatDialog,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    @Inject('JobsFacade') private jobsFacade: JobsFacade
  ) {}

  ngOnInit(): void {
    this.jobs$ = this.jobsFacade.init();
    this.loading$ = this.jobsFacade.loaded$;
    this.user$ = this.authFacade.loadUser();
  }

  addJob(): void {
    this.dialog.open(AddJobComponent, {
      panelClass: 'full-screen-dialog',
    });
  }

  editJob(job: Job): void {
    this.dialog.open(AddJobComponent, {
      panelClass: 'full-screen-dialog',
      data: {
        job: job,
      },
    });
  }

  deleteJob(job: Job): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Are you sure you want to delete the job',
    });
    dialogRef.afterClosed().subscribe((approved) => {
      this.uploadFacade.cleanUploads();
      approved && this.jobsFacade.deleteJob(job)
    });
  }

}
