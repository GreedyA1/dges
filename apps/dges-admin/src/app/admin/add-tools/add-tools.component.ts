import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToolsEntity, ToolsFacade } from '@dges/store/tools/firebase';
import { UploadEntity } from '@dges/store/storage/firebase';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { EMPTY_SKILL, Skill } from '@dges/types/skill';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-add-tools',
  templateUrl: './add-tools.component.html',
  styleUrls: ['./add-tools.component.scss'],
})
export class AddToolsComponent implements OnInit {
  public toolForm: FormControl;
  private tool: Skill;
  public uploads$: Observable<UploadEntity[]>;
  public tools$: Observable<ToolsEntity[]>;
  public uploaded: string;
  public readonly folderName = 'tools';

  constructor(
    public dialogRef: MatDialogRef<AddToolsComponent>,
    @Inject('ToolsFacade') private toolsFacade: ToolsFacade,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    @Inject(MAT_DIALOG_DATA) public data: { tool: Skill }
  ) {}

  updateFiles(files: File[]): void {
    this.uploadFacade.upload(files, this.folderName);
    this.uploads$ = this.uploadFacade.allUpload$;
  }

  ngOnInit(): void {
    this.tools$ = this.toolsFacade.allTools$;
    this.toolsFacade.init();
    this.tool = this.data?.tool || EMPTY_SKILL;
    this.toolForm = new FormControl(this.tool);
    this.uploaded = this.tool.image;
  }

  onUploaded(images: string[]) {
    this.uploaded = images[0];
  }

  deleteTool(tool: Skill): void {
    this.toolsFacade.deleteTool(tool);
  }

  addOrEditTool(): void {
    this.data
      ? this.toolsFacade.editTool({
          ...this.toolForm.value,
          image: this.uploaded,
        })
      : this.toolsFacade.addTool({
          ...this.toolForm.value,
          image: this.uploaded,
        });

    this.toolsFacade.editOrAddSuccess().subscribe(() => {
      this.toolForm.reset(EMPTY_SKILL);
      this.uploaded = null;
      this.uploadFacade.cleanUploads();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
