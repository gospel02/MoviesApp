import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  topRated_movies: any;
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  nowInTheaters_movies: any;
  popularKids_movies: any;
  movie: any;
  constructor(public movieService: MovieService) {
    this.movieService.getTopRatedMovies().subscribe(data => {
      this.topRated_movies = data['results'];
    });


    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
    });

    this.movieService.getMoviesNowInTheaters().subscribe(data => {
      this.nowInTheaters_movies = data['results'];
    });


    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
    });

    this.movieService.getPopularKidsMovies().subscribe(data => {
      this.popularKids_movies = data['results'];
    });

  }
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
    });
  }
  ngOnInit() {
  }
}
