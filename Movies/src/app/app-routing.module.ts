import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesOfUserComponent } from './movies-of-user/movies-of-user.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent,
  },
  { 
    path: 'moviedetail/:movieID', 
    component: MoviedetailComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'homepage', 
    component: HomepageComponent,
  },
  { 
    path: 'movies-of-user', 
    component: MoviesOfUserComponent
  },
  { 
    path: '', 
    redirectTo: 'homepage', 
    pathMatch: 'full' 
  },
  { path: '**', 
    redirectTo: 'homepage', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
