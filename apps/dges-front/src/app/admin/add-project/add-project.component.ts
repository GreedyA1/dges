import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsActions } from '@dges/store/projects/projects-firebase';
import { EMPTY_PROJECT, Project } from '@dges/types/project';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RootStoreModule } from '../../+store/root-store.module';
import { getAllUpload, init, UploadEntity, UploadFacade } from '@dges/store/storage/firebase';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import  environment.uploadFacade as UploadFacade from '../../../environments/environment'

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
    private uploadFacade: UploadFacade,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project }
  ) {}

  public projectForm: FormControl;
  private project: Project;
  public files: File[];
  public uploads$: Observable<UploadEntity[]>;
  public uploaded: string[];

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateFiles(files: File[]): void {
    this.files = files;
    this.uploadFacade.init(files)
    this.uploads$ = this.uploadFacade.allUpload$
    //load store here
  }

  onUploaded($event): void {
    // const a: Project = this.projectForm.value;
    // a.images.push($event);
    // console.log(a);
    // this.projectForm = new FormControl(a);
    this.uploaded.push($event);
  }

  ngOnInit(): void {
    this.project = this.data?.project || EMPTY_PROJECT;
    this.projectForm = new FormControl(this.project);
    this.uploaded = this.project.images;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.uploaded, event.previousIndex, event.currentIndex);
  }

  public addOrEditProject(): void {
    this.store.dispatch(
      this.data
        ? ProjectsActions.editProject({
            project: { ...this.projectForm.value, images: this.uploaded },
          })
        : ProjectsActions.addProject({
            project: { ...this.projectForm.value, images: this.uploaded },
          })
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
