import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadTaskComponent } from './upload-task/upload-task.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UploadTaskComponent],
  exports: [UploadTaskComponent],
})
export class UiUploadTaskModule {}
