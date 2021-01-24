import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-images-control',
  templateUrl: './images-control.component.html',
  styleUrls: ['./images-control.component.scss'],
})
export class ImagesControlComponent {
  @Input() multi: boolean;
  @Input() uploads$: Observable<any[]>;

  @Input()
  get images(): string[] {
    return this._images;
  }
  set images(images: string[]) {
    this._images = images || [];
  }
  private _images: string[] = [];

  @Output() updateFiles = new EventEmitter<File[]>();
  @Output() uploaded = new EventEmitter<string[] | string>();
  uploading = 0;

  emitOnUploaded($event) {
    this.images.push($event);
    this.uploading--;
    if (!this.uploading) {
      this.uploaded.emit(this.images);
    }
  }

  emitUpdateFiles($event) {
    this.images = [];
    this.uploading = $event.length;
    this.updateFiles.emit($event);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }
}
