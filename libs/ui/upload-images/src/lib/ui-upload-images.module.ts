import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { UiDropZoneModule } from '@dges/ui/drop-zone';

@NgModule({
  imports: [CommonModule, UiDropZoneModule],
  declarations: [UploadImagesComponent],
  exports: [UploadImagesComponent],
})
export class UiUploadImagesModule {}
