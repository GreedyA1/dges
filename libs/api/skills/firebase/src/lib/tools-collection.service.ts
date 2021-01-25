import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Skill } from '@dges/types/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolsCollectionService {
  private readonly PROJECTS_COLLECTION_NAME = 'tools';

  private toolsCollection: AngularFirestoreCollection<
    Skill
  > = this.angularFire.collection(this.PROJECTS_COLLECTION_NAME);

  constructor(private angularFire: AngularFirestore) {}

  public toolsStateChanges(): Observable<DocumentChangeAction<Skill>[]> {
    return this.toolsCollection.snapshotChanges();
  }

  public getTools(): Observable<Skill[]> {
    return this.toolsCollection.valueChanges({ idField: 'id' });
  }

  public addTool(tool: any): Promise<DocumentReference<Skill>> {
    return this.toolsCollection.add(tool);
  }

  public editTool(tool: any): Promise<void> {
    return this.toolsCollection.doc(tool.id).update(tool);
  }

  public deleteTool(tool: any): Promise<void> {
    return this.toolsCollection.doc(tool.id).delete();
  }
}
