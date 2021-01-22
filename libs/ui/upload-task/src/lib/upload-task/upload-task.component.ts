import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'dges-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss'],
})
export class UploadTaskComponent implements OnInit {
  @Input() task: AngularFireUploadTask;

  @Output() fileURL = new EventEmitter<string>();

  percentage$: Observable<number>;
  snapshot$: Observable<any>;
  downloadURL: string;

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // Reference to storage bucket
    const ref = this.task.task.snapshot.ref;

    // Progress monitoring
    this.percentage$ = this.task.percentageChanges();

    this.snapshot$ = this.task.snapshotChanges().pipe(
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL();
        this.fileURL.emit(this.downloadURL);
      })
    );
  }

  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
