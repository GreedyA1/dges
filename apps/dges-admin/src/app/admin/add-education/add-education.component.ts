import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationFacade, addEducationSuccess, editEducationSuccess } from '@dges/store/education/firebase';
import { SkillsFacade, SkillsEntity } from '@dges/store/skills/firebase';
import { UploadEntity } from '@dges/store/storage/firebase';
import { ToolsFacade, ToolsEntity } from '@dges/store/tools/firebase';
import { Education, EMPTY_EDUCATION } from '@dges/types/education';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {

  constructor(
    private readonly actions$: Actions,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    public dialogRef: MatDialogRef<AddEducationComponent>,
    private educationFacade: EducationFacade,
    @Inject(MAT_DIALOG_DATA) public data: { education: Education }
  ) {}

  public educationForm: FormControl;
  private education: Education;
  public uploads$: Observable<UploadEntity[]>;
  public uploaded: string;
  public readonly folderName = 'education';

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateFiles(files: File[]): void {
    this.uploadFacade.upload(files, this.folderName);
    this.uploads$ = this.uploadFacade.allUpload$;
  }

  ngOnInit(): void {
    this.education = this.data?.education || EMPTY_EDUCATION;
    this.educationForm = new FormControl(this.education);
    this.uploaded = this.education.image;
  }

  onUploaded(images: string[]) {
    this.uploaded = images[0];
  }

  public addOrEditEducation(): void {
    this.data
      ? this.educationFacade.editEducation({
          ...this.educationForm.value,
          images: this.uploaded,
        })
      : this.educationFacade.addEducation({
          ...this.educationForm.value,
          images: this.uploaded,
        });

    this.actions$
      .pipe(ofType(addEducationSuccess, editEducationSuccess))
      .subscribe(() => this.dialogRef.close(this.educationForm.value));
  }
}
