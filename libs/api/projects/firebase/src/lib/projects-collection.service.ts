import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import {Project} from '@dges/types/project';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsCollectionService {
  private readonly PROJECTS_COLLECTION_NAME = 'projects';

  private projectsCollection: AngularFirestoreCollection<Project> = this.angularFire.collection(this.PROJECTS_COLLECTION_NAME);

  constructor(private angularFire: AngularFirestore) {
  }

  public projectsStateChanges(): Observable<DocumentChangeAction<Project>[]> {
    return this.projectsCollection.stateChanges();
  }

  public projectsGet(): Observable<Project[]> {
    return this.projectsCollection.valueChanges();
  }
}
