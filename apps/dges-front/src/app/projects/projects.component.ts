import { Component, OnInit } from '@angular/core';
import {
  ProjectsActions,
  ProjectsSelectors,
} from '@dges/store/projects/projects-firebase';
import { Project } from '@dges/types/project';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {RootStoreModule} from "../+store/root-store.module";

@Component({
  selector: 'dges-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private store: Store<RootStoreModule>) {
  }

  ngOnInit(): void {
    this.store.dispatch(ProjectsActions.loadProjects());
    this.projects$ = this.store.select(ProjectsSelectors.getProjectsData);
  }
}
