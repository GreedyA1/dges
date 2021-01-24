import { Observable } from 'rxjs';
import { UploadEntity } from '@dges/store/storage/firebase';

export interface UploadFacade {
  loaded$: Observable<boolean>;
  allUpload$: Observable<UploadEntity[]>;
  selectedUpload$: Observable<UploadEntity>;
  upload(files: File[], folderName: string): void;
  cleanUploads(): void;

  // constructor(private store: Store) {}
}
