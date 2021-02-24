import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '@dges/types/project';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { ProjectsFacade } from '@dges/store/projects/firebase';

@Component({
  selector: 'dges-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    @Inject('ProjectsFacade') private projectsFacade: ProjectsFacade
  ) {}

  ngOnInit(): void {
    this.projectsFacade.loadProjects();
    this.projects$ = this.projectsFacade.allProjects$;
    this.loading$ = this.projectsFacade.loaded$;
  }
}
