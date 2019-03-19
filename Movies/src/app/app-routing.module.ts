import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'moviedetail/:movieID', component: MoviedetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
