import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EMPTY_PROJECT, Project } from '@dges/types/project';
import { Actions, ofType } from '@ngrx/effects';
import { UploadEntity } from '@dges/store/storage/firebase';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { Observable } from 'rxjs';
import { SkillsEntity, SkillsFacade } from '@dges/store/skills/firebase';
import { ToolsEntity, ToolsFacade } from '@dges/store/tools/firebase';
import {
  addProjectSuccess,
  editProjectSuccess,
  ProjectsFacade,
} from '@dges/store/projects/firebase';

@Component({
  selector: 'dges-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  constructor(
    private readonly actions$: Actions,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    @Inject('ProjectsFacade') private projectsFacade: ProjectsFacade,
    public dialogRef: MatDialogRef<AddProjectComponent>,
    @Inject('SkillsFacade') private skillsFacade: SkillsFacade,
    @Inject('ToolsFacade') private toolsFacade: ToolsFacade,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project }
  ) {}

  public projectForm: FormControl;
  private project: Project;
  public uploads$: Observable<UploadEntity[]>;
  public uploaded: string[];
  public skills$: Observable<SkillsEntity[]>;
  public tools$: Observable<ToolsEntity[]>;
  public readonly folderName = 'projects';

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateFiles(files: File[]): void {
    this.uploadFacade.upload(files, this.folderName);
    this.uploads$ = this.uploadFacade.allUpload$;
  }

  ngOnInit(): void {
    this.skills$ = this.skillsFacade.allSkills$;
    this.tools$ = this.toolsFacade.allTools$;
    this.skillsFacade.init();
    this.toolsFacade.init();
    this.project = this.data?.project || EMPTY_PROJECT;
    this.projectForm = new FormControl(this.project);
    this.uploaded = this.project.images;
  }

  onUploaded(images: string[]) {
    this.uploaded = images;
  }

  public addOrEditProject(): void {
    this.data
      ? this.projectsFacade.editProject({
          ...this.projectForm.value,
          images: this.uploaded,
        })
      : this.projectsFacade.addProject({
          ...this.projectForm.value,
          images: this.uploaded,
        });

    this.actions$
      .pipe(ofType(addProjectSuccess, editProjectSuccess))
      .subscribe(() => this.dialogRef.close(this.projectForm.value));
  }
}
