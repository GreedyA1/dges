import { Observable } from 'rxjs';
import { UploadEntity } from '@dges/store/storage/firebase'

export interface UploadFacade {
  loaded$: Observable<boolean>;
  allUpload$: Observable<UploadEntity[]>;
  selectedUpload$: Observable<UploadEntity[]>;
  init(files: File[]): void;
  cleanUploads(): void;

  // constructor(private store: Store) {}
}
