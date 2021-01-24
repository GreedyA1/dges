import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsEntity, SkillsFacade } from '@dges/store/skills/firebase';
import { UploadEntity } from '@dges/store/storage/firebase';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { EMPTY_SKILL, Skill } from '@dges/types/skill';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss'],
})
export class AddSkillComponent implements OnInit {
  public skillForm: FormControl;
  private skill: Skill;
  public uploads$: Observable<UploadEntity[]>;
  public skills$: Observable<SkillsEntity[]>;
  public uploaded: string;
  public readonly folderName = 'skills';

  constructor(
    public dialogRef: MatDialogRef<AddSkillComponent>,
    @Inject('SkillsFacade') private skillsFacade: SkillsFacade,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    @Inject(MAT_DIALOG_DATA) public data: { skill: Skill }
  ) {}

  updateFiles(files: File[]): void {
    this.uploadFacade.upload(files, this.folderName);
    this.uploads$ = this.uploadFacade.allUpload$;
  }

  ngOnInit(): void {
    this.skills$ = this.skillsFacade.allSkills$;
    this.skillsFacade.init();
    this.skill = this.data?.skill || EMPTY_SKILL;
    this.skillForm = new FormControl(this.skill);
    this.uploaded = this.skill.image;
  }

  onUploaded(images: string[]) {
    this.uploaded = images[0];
  }

  deleteSkill(skill: Skill): void {
    this.skillsFacade.deleteSkill(skill);
  }

  addOrEditSkill(): void {
    this.data
      ? this.skillsFacade.editSkill({
          ...this.skillForm.value,
          image: this.uploaded,
        })
      : this.skillsFacade.addSkill({
          ...this.skillForm.value,
          image: this.uploaded,
        });

    this.skillsFacade.editOrAddSuccess().subscribe(() => {
      this.skillForm.reset(EMPTY_SKILL);
      this.uploaded = null;
      this.uploadFacade.cleanUploads();
    });
    // this.actions$
    //   .pipe(ofType(addSkillSuccess, editSkillSuccess))
    //   .subscribe(() => this.dialogRef.close(this.skillForm.value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
