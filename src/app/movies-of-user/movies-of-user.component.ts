import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from "@angular/fire/firestore";
import { MoviedetailComponent } from "../moviedetail/moviedetail.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies-of-user',
  templateUrl: './movies-of-user.component.html',
  styleUrls: ['./movies-of-user.component.sass']
})
export class MoviesOfUserComponent implements OnInit {

  user: User;
  user$;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    

  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

}
