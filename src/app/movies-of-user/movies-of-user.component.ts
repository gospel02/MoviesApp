import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, DocumentData} from '@angular/fire/firestore';
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';
import { UserMoviesService} from './user-movies.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies-of-user',
  templateUrl: './movies-of-user.component.html',
  styleUrls: ['./movies-of-user.component.sass']
})
export class MoviesOfUserComponent implements OnInit {

  user: User;
  userCollectionRef;
  user$: Observable<User[]>;
  watchedMovies: DocumentData;
  interestedMovies: DocumentData;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private userMoviesService: UserMoviesService
  ) {
    this.userCollectionRef = this.afs.collection<User>('users');
    this.user$ = this.userCollectionRef.valueChanges();
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.afs.collection('users').doc(this.user.uid).collection('completedMovies').valueChanges()
        .subscribe(data => {
          this.watchedMovies = data;
        });
      this.afs.collection('users').doc(this.user.uid).collection('interestedMovies').valueChanges()
        .subscribe(data => {
          this.interestedMovies = data;
        });
    });

  }

  routeToMovies(id) {
this.router.navigate([`/moviedetail/${id}`]);
  }
}
