import { Component, OnInit } from '@angular/core';
import {ProjectsActions, ProjectsSelectors, ProjectsState} from '@dges/store/projects/projects-firebase';
import { Project } from '@dges/types/project';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'dges-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<Project[]>;

  constructor(private store: Store<ProjectsState.ProjectsState>) {
    console.log('test');
  }

  ngOnInit(): void {
    console.log('test');
    this.store.dispatch(ProjectsActions.loadProjects())
    this.projects$ = this.store.select(ProjectsSelectors.getProjectsData)
  }


}
