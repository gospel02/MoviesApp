import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../movie.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../auth/user';
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";


@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.sass']
})
export class MoviedetailComponent implements OnInit {
  
  movie: any;
  user;
  userCollectionRef;
  user$: Observable<User[]>;

  constructor(private router: ActivatedRoute,
     private movieService: MovieService,
     private afs: AngularFirestore,
     private afAuth: AngularFireAuth
     ) {
      this.userCollectionRef = this.afs.collection<User>('users');
      this.user$ = this.userCollectionRef.valueChanges();
  
      this.afAuth.authState.subscribe(user => {
        this.user = user;
        console.log(user)
      });

      }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.movieService.getMovie(id).subscribe(data => {
        this.movie = data;
         console.log(data);
      });
    });
  }

}
