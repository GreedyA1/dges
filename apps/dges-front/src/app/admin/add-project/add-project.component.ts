import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsActions } from '@dges/store/projects/projects-firebase';
import { EMPTY_PROJECT, Project } from '@dges/types/project';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RootStoreModule } from '../../+store/root-store.module';

@Component({
  selector: 'dges-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddProjectComponent>,
    private store: Store<RootStoreModule>,
    private readonly actions$: Actions,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project }
  ) {}

  public projectForm: FormControl;
  private project: Project;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.project = this.data?.project || EMPTY_PROJECT;
    this.projectForm = new FormControl(this.project);
  }

  public addOrEditProject(): void {
    
    this.store.dispatch(
      this.data
        ? ProjectsActions.editProject({ project: this.projectForm.value })
        : ProjectsActions.addProject({ project: this.projectForm.value })
    );

    this.actions$
      .pipe(
        ofType(
          ProjectsActions.addProjectSuccess,
          ProjectsActions.editProjectSuccess
        )
      )
      .subscribe(() => this.dialogRef.close(this.projectForm.value));
  }
}
