import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesControlComponent } from './images-control/images-control.component';
import { UiUploadImagesModule } from '@dges/ui/upload-images';
import { UiUploadTaskModule } from '@dges/ui/upload-task';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    UiUploadImagesModule,
    UiUploadTaskModule,
    DragDropModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [ImagesControlComponent],
  exports: [ImagesControlComponent],
})
export class UiImagesControlModule {}
