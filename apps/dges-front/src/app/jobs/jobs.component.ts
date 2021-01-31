import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthSelectors } from '@dges/store/auth/firebase';
import { JobsFacade } from '@dges/store/jobs/firebase';
import { User } from '@dges/types/auth';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { Job } from '@dges/types/job';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreModule } from '../+store/root-store.module';
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
    private store: Store<RootStoreModule>,
    public dialog: MatDialog,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    @Inject('JobsFacade') private jobsFacade: JobsFacade
  ) {}

  ngOnInit(): void {
    // this.store.dispatch(ProjectsActions.loadProjects());
    this.jobs$ = this.jobsFacade.allJobs$;
    this.loading$ = this.jobsFacade.loaded$;
    this.user$ = this.store.select(AuthSelectors.getCurrentUser);
  }

  addJob(): void {
    this.dialog.open(AddJobComponent, {
      panelClass: 'full-screen-dialog',
    });
  }
}
