import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  private _uploadPercentage$: Observable<number>;

  get uploadPercentage$() {
    return this._uploadPercentage$;
  }

  constructor(private storage: AngularFireStorage) {}

  uploadFile(event, pathName: string) {
    let downloadUrl: Observable<string>;
    const file = event.target.files[0];
    const filePath = 'projects/' + pathName;
    const task = this.storage.upload(filePath, file);

    const fileRef = this.storage.ref(filePath);

    // observe percentage changes
    this._uploadPercentage$ = task.percentageChanges();
    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(finalize(() => (downloadUrl = fileRef.getDownloadURL())));
    return downloadUrl;
  }

  startUpload(file: File): AngularFireUploadTask {
    // The storage path
    const path = `projects/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    return this.storage.upload(path, file);

    // // Progress monitoring
    // this.percentage = task.percentageChanges();

    // this.snapshot = task.snapshotChanges().pipe(
    //   tap(console.log),
    //   // The file's download URL
    //   finalize(async () => {
    //     this.downloadURL = await ref.getDownloadURL().toPromise();
    //     this.fileURL.emit(this.downloadURL);
    //   })
    // );
  }

  // getUploadPercentage(event): Observable<any> {
  //   return this.uploadFile(event).percentageChanges();
  // }
}
