import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { UploadEntity } from '@dges/store/storage/firebase';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { Observable } from 'rxjs';
import { SkillsEntity, SkillsFacade } from '@dges/store/skills/firebase';
import { ToolsEntity, ToolsFacade } from '@dges/store/tools/firebase';
import { EMPTY_JOB, Job } from '@dges/types/job';
import {
  addJobSuccess,
  editJobSuccess,
  JobsFacade,
} from '@dges/store/jobs/firebase';

@Component({
  selector: 'dges-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent implements OnInit {
  constructor(
    private readonly actions$: Actions,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    public dialogRef: MatDialogRef<AddJobComponent>,
    @Inject('JobsFacade') private jobsFacade: JobsFacade,
    @Inject('SkillsFacade') private skillsFacade: SkillsFacade,
    @Inject('ToolsFacade') private toolsFacade: ToolsFacade,
    @Inject(MAT_DIALOG_DATA) public data: { job: Job }
  ) {}

  public jobForm: FormControl;
  private job: Job;
  public uploads$: Observable<UploadEntity[]>;
  public uploaded: string[];
  public skills$: Observable<SkillsEntity[]>;
  public tools$: Observable<ToolsEntity[]>;
  public readonly folderName = 'jobs';

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
    this.job = this.data?.job || EMPTY_JOB;
    this.jobForm = new FormControl(this.job);
    this.uploaded = this.job.images;
  }

  onUploaded(images: string[]) {
    this.uploaded = images;
  }

  public addOrEditJob(): void {
    this.data
      ? this.jobsFacade.editJob({
          ...this.jobForm.value,
          images: this.uploaded,
        })
      : this.jobsFacade.addJob({
          ...this.jobForm.value,
          images: this.uploaded,
        });

    this.actions$
      .pipe(ofType(addJobSuccess, editJobSuccess))
      .subscribe(() => this.dialogRef.close(this.jobForm.value));
  }
}
