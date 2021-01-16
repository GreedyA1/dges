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
    const filePath = 'projects/'+ pathName;
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

  // getUploadPercentage(event): Observable<any> {
  //   return this.uploadFile(event).percentageChanges();
  // }
}
