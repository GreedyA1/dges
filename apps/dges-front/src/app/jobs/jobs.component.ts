import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobsFacade } from '@dges/store/jobs/firebase';
import { Job } from '@dges/types/job';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobs$: Observable<Job[]>;
  loading$: Observable<boolean>;


  constructor(
    public dialog: MatDialog,
    @Inject('JobsFacade') private jobsFacade: JobsFacade
  ) {}

  ngOnInit(): void {
    this.jobs$ = this.jobsFacade.init();
    this.loading$ = this.jobsFacade.loaded$;
  }
}
