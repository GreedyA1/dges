import { Component, EventEmitter, Output } from '@angular/core';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'dges-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent {

  
  @Output() fileURL = new EventEmitter<string[]>();

  isHovering: boolean;

  files: File[] = [];
  filesURLS: string[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: HTMLInputEvent) {
    const uploadFiles = files.target.files;
    for (let i = 0; i < uploadFiles.length; i++) {
      this.files.push(uploadFiles.item(i));
    }
  }

  onUploaded(fileURL: string) {
    this.filesURLS.push(fileURL)
    if(this.filesURLS.length && (this.filesURLS.length === this.files.length)){
      this.fileURL.emit(this.filesURLS)
    }
  }

}
