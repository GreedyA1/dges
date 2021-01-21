import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '@dges/type/skill';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
  providedIn: 'root',
})
export class SkillsCollectionService {
  private readonly PROJECTS_COLLECTION_NAME = 'skills';

  private skillsCollection: AngularFirestoreCollection<
    Skill
  > = this.angularFire.collection(this.PROJECTS_COLLECTION_NAME);

  constructor(private angularFire: AngularFirestore) {}

  public skillsStateChanges(): Observable<DocumentChangeAction<Skill>[]> {
    return this.skillsCollection.snapshotChanges();
  }

  public getSkills(): Observable<Skill[]> {
    return this.skillsCollection.valueChanges({ idField: 'id' });
  }

  public addSkill(skill: any): Promise<DocumentReference<Skill>> {
    return this.skillsCollection.add(skill);
  }

  public editSkill(skill: any): Promise<void> {
    return this.skillsCollection.doc(skill.id).update(skill);
  }

  public deleteSkill(skill: any): Promise<void> {
    return this.skillsCollection.doc(skill.id).delete();
  }
}
