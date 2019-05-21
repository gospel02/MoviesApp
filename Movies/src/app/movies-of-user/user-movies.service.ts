import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, DocumentData } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import {User} from '../auth/user';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserMoviesService {

  public user;
  completedMovies: DocumentData[];
  interestedMovies: DocumentData[];
  userCollectionRef;

  constructor(private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ) {
      this.userCollectionRef = this.afs.collection<User>('users');
      this.afAuth.authState.subscribe(user => {
        this.user = user;
        this.afs.collection('users').doc(this.user.uid).collection('completedMovies').valueChanges()
          .subscribe(data => {
            this.completedMovies = data;
          });
        this.afs.collection('users').doc(this.user.uid).collection('interestedMovies').valueChanges()
          .subscribe(data => {
            this.interestedMovies = data;
          });
      });
     }

     addWatched() {

     }
     addInterested() {

     }
     removeWatched() {

     }
     removeInterested() {

     }


}
