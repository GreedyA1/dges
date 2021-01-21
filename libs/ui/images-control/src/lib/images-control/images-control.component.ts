import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-images-control',
  templateUrl: './images-control.component.html',
  styleUrls: ['./images-control.component.scss'],
})
export class ImagesControlComponent {
  @Input() multi: boolean;
  @Input() uploads$: Observable<any[]>;
  @Input() images: string[];
  @Output() updateFiles = new EventEmitter<File[]>();
  @Output() onUploaded = new EventEmitter<string>();

  emitOnUploaded($event) {
    this.images.push($event);
    this.onUploaded.emit($event);
  }

  emitUpdateFiles($event) {
    console.log($event)
    this.updateFiles.emit($event);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }
}
