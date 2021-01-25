import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthSelectors } from '@dges/store/auth/firebase';
import {
  ProjectsActions,
  ProjectsSelectors,
} from '@dges/store/projects/projects-firebase';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { User } from '@dges/types/auth';
import { Project } from '@dges/types/project';
import { ConfirmDialogComponent } from '@dges/ui/confirm-dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreModule } from '../+store/root-store.module';
import { AddProjectComponent } from '../admin/add-project/add-project.component';
import { Inject } from '@angular/core';
import { AddSkillComponent } from '../admin/add-skill/add-skill.component';
import { AddToolsComponent } from '../admin/add-tools/add-tools.component';

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

  constructor(
    private store: Store<RootStoreModule>,
    public dialog: MatDialog,
    @Inject('UploadFacade') private uploadFacade: UploadFacade
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ProjectsActions.loadProjects());
    this.projects$ = this.store.select(ProjectsSelectors.getProjectsData);
    this.user$ = this.store.select(AuthSelectors.getCurrentUser);
    this.loading$ = this.store.select(ProjectsSelectors.getProjectsLoading);
  }

  addProject(): void {
    this.dialog.open(AddProjectComponent, {
      panelClass: 'full-screen-dialog',
    });
  }

  addSkill(): void {
    this.dialog.open(AddToolsComponent, {
      panelClass: 'full-screen-dialog',
    });
  }

  editProject(project: Project): void {
    this.dialog.open(AddProjectComponent, {
      panelClass: 'full-screen-dialog',
      data: {
        project: project,
      },
    });
  }

  deleteProject(project: Project): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Are you sure you want to delete the project',
    });
    dialogRef.afterClosed().subscribe((approved) => {
      this.uploadFacade.cleanUploads();
      approved &&
        this.store.dispatch(
          ProjectsActions.deleteProject({ project: project })
        );
    });
  }
}
