import { AngularFireUploadTask } from '@angular/fire/storage';

/**
 * Interface for the 'Upload' data
 */
export interface UploadEntity extends AngularFireUploadTask {
  id?: string | number; // Primary ID
  
}
