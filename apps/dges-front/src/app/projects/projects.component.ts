import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ProjectsActions,
  ProjectsSelectors,
} from '@dges/store/projects/projects-firebase';
import { Project } from '@dges/types/project';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreModule } from '../+store/root-store.module';

@Component({
  selector: 'dges-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private store: Store<RootStoreModule>) {}

  ngOnInit(): void {
    this.store.dispatch(ProjectsActions.loadProjects());
    this.projects$ = this.store.select(ProjectsSelectors.getProjectsData);
  }

  public projectForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    link: new FormControl(''),
    tools: new FormControl([]),
    images: new FormControl([]),
    skills: new FormControl([]),
  });

  public addProject() {
    this.store.dispatch(ProjectsActions.addProject(this.projectForm.value));
  }
}
