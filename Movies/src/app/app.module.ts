import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from "../environments/environment";
import * as firebase from 'firebase';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatInputModule, 
  MatCheckboxModule,
  MatToolbarModule 
 } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesOfUserComponent } from './movies-of-user/movies-of-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviedetailComponent,
    MoviesOfUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    
   
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
