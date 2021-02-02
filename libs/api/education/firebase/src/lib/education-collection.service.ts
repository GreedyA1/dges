import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Education } from '@dges/types/education';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
  providedIn: 'root',
})
export class EducationCollectionService {
  private readonly PROJECTS_COLLECTION_NAME = 'educations';

  private educationsCollection: AngularFirestoreCollection<
    Education
  > = this.angularFire.collection(this.PROJECTS_COLLECTION_NAME);

  constructor(private angularFire: AngularFirestore) {}

  public educationsStateChanges(): Observable<DocumentChangeAction<Education>[]> {
    return this.educationsCollection.snapshotChanges();
  }

  public getEducation(): Observable<Education[]> {
    return this.educationsCollection.valueChanges({ idField: 'id' });
  }

  public addEducation(education: any): Promise<DocumentReference<Education>> {
    console.log('Another test')
    return this.educationsCollection.add(education);
  }

  public editEducation(education: any): Promise<void> {
    return this.educationsCollection.doc(education.id).update(education);
  }

  public deleteEducation(education: any): Promise<void> {
    return this.educationsCollection.doc(education.id).delete();
  }
}
