import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../movie.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../auth/user';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserMoviesService } from '../movies-of-user/user-movies.service';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.sass']
})
export class MoviedetailComponent implements OnInit {

  movie: any;
  watched: boolean;
  interested: boolean;
  user;
  userCollectionRef;
  user$: Observable<User[]>;

  constructor(private router: ActivatedRoute,
     private route: Router,
     private movieService: MovieService,
     private afs: AngularFirestore,
     private afAuth: AngularFireAuth,
     private userMoviesService: UserMoviesService
     ) {
      this.userCollectionRef = this.afs.collection<User>('users');
      this.user$ = this.userCollectionRef.valueChanges();

      this.afAuth.authState.subscribe(user => {
        this.user = user;
      });

      }
  ngOnInit() {
    if (this.user === undefined) {
      this.route.navigate(['/homepage']);
    }
     (this.userMoviesService.user = this.user);
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.movieService.getMovie(id).subscribe(data => {
        this.movie = data;

      });
    });
  }

watchedThis(id, name) {
  if (this.watched) {
    this.userMoviesService.addWatched(id, name);
  } else {
    this.userMoviesService.removeWatched(id);
  }
}
interestedThis(id, name) {
  if (this.interested) {
    this.userMoviesService.addInterested(id, name);
  } else {
    this.userMoviesService.removeInterested(id);
  }
}
}
