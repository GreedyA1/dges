import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthSelectors } from '@dges/store/auth/firebase';
import {
  ProjectsActions,
  ProjectsSelectors,
} from '@dges/store/projects/projects-firebase';
import { User } from '@dges/types/auth';
import { Project } from '@dges/types/project';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreModule } from '../+store/root-store.module';
import { AddProjectComponent } from '../admin/add-project/add-project.component';

@Component({
  selector: 'dges-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  user$: Observable<User>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;

  constructor(private store: Store<RootStoreModule>, 
    public dialog: MatDialog,) {}

  ngOnInit(): void {
    this.store.dispatch(ProjectsActions.loadProjects());
    this.projects$ = this.store.select(ProjectsSelectors.getProjectsData);
    this.user$ = this.store.select(AuthSelectors.getCurrentUser);
    this.loading$ = this.store.select(ProjectsSelectors.getProjectsLoading);
  }

  addProject(): void {
    const dialogRef = this.dialog.open(AddProjectComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // if (result) {
      //   this.store.dispatch(ProjectsActions.addProject(result));
      // }
    });
  }

  editProject(project: Project): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {data: {
      project: project
    }});

    dialogRef.afterClosed().subscribe((result) => {
      // if (result) {
      //   this.store.dispatch(ProjectsActions.addProject(result));
      // }
    });
  }

  deleteProject(project: Project): void {
    this.store.dispatch(ProjectsActions.deleteProject({project: project}));
  }
}
