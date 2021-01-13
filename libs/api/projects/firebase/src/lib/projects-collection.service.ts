import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Project } from '@dges/types/project';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
  providedIn: 'root',
})
export class ProjectsCollectionService {
  private readonly PROJECTS_COLLECTION_NAME = 'projects';

  private projectsCollection: AngularFirestoreCollection<
    Project
  > = this.angularFire.collection(this.PROJECTS_COLLECTION_NAME);

  constructor(private angularFire: AngularFirestore) {}

  public projectsStateChanges(): Observable<DocumentChangeAction<Project>[]> {
    return this.projectsCollection.snapshotChanges();
  }

  public projectsGet(): Observable<Project[]> {
    return this.projectsCollection.valueChanges({idField: 'id'});
  }

  public addProject(project: any): Promise<DocumentReference<Project>> {
    return this.projectsCollection.add(project);
  }

  public editProject(project: any): Promise<void> {
    return this.projectsCollection.doc(project.id).update(project);
  }

  public deleteProject(project: any): Promise<void> {
    return this.projectsCollection.doc(project.id).delete()
  }
}
