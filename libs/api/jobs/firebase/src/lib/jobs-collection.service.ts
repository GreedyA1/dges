import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Job } from '@dges/types/job';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
  providedIn: 'root',
})
export class JobsCollectionService {
  private readonly PROJECTS_COLLECTION_NAME = 'jobs';

  private jobsCollection: AngularFirestoreCollection<
    Job
  > = this.angularFire.collection(this.PROJECTS_COLLECTION_NAME);

  constructor(private angularFire: AngularFirestore) {}

  public jobsStateChanges(): Observable<DocumentChangeAction<Job>[]> {
    return this.jobsCollection.snapshotChanges();
  }

  public getJobs(): Observable<Job[]> {
    return this.jobsCollection.valueChanges({ idField: 'id' });
  }

  public addJob(job: any): Promise<DocumentReference<Job>> {
    console.log('Another test')
    return this.jobsCollection.add(job);
  }

  public editJob(job: any): Promise<void> {
    return this.jobsCollection.doc(job.id).update(job);
  }

  public deleteJob(job: any): Promise<void> {
    return this.jobsCollection.doc(job.id).delete();
  }
}
