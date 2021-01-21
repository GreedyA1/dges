import { Component, EventEmitter, Input, Output } from '@angular/core';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'dges-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent {
  @Output() filesUpdate = new EventEmitter<File[]>();
  @Input() multi: boolean;
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
    this.filesUpdate.emit(this.files);
  }
}
