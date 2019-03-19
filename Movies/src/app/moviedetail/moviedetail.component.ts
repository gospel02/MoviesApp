import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.sass']
})
export class MoviedetailComponent implements OnInit {
  
  movie: any;

  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

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
