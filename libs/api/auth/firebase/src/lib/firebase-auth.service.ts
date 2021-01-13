import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private readonly _user: Observable<firebase.User>;
  
  get user$() {
    return this._user;
  }

  constructor(public auth: AngularFireAuth) {
    this._user = this.auth.user;
  }

  login(email: string, password: string): Promise<UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }
}
