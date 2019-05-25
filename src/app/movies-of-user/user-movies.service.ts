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
  public completedMovies: DocumentData[];
  public interestedMovies: DocumentData[];
  userCollectionRef;
  completedMoviesRef;
  interestedMoviesRef;

  constructor(private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ) {
      this.userCollectionRef = this.afs.collection<User>('users');
      this.afAuth.authState.subscribe(user => {
        this.user = user;
        (this.completedMoviesRef = this.afs.collection('users').doc(this.user.uid).collection('completedMovies'));
        (this.interestedMoviesRef = this.afs.collection('users').doc(this.user.uid).collection('interestedMovies'));
      });
     }
     addWatched(id, name) {
    const docId = id.toString();
    this.completedMoviesRef.doc(docId).set({
         id: id,
         name: name
       }, {merge: true})
         .then(function() {
           console.log('Document successfully written!');
         })
         .catch(function(error) {
           console.error('Error writing document: ', error);
         });
     }
     addInterested(id, name) {
       const docId = id.toString();
       this.interestedMoviesRef.doc(docId).set({
         id: id,
         name: name
       }, {merge: true})
         .then(function() {
           console.log('Document successfully written!');
         })
         .catch(function(error) {
           console.error('Error writing document: ', error);
         });
     }
     removeWatched(id) {
       const docId = id.toString();
       return this.completedMoviesRef.doc(docId).delete().then(function() {
         console.log('Document successfully removed!');
       })
         .catch(function(error) {
           console.error('Error removing document: ', error);
         });
     }
     removeInterested(id) {
       const docId = id.toString();
       return this.interestedMoviesRef.doc(docId).delete().then(function() {
         console.log('Document successfully removed!');
       })
         .catch(function(error) {
           console.error('Error removing document: ', error);
         });
     }


}
