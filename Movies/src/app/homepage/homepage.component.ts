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
       console.log(this.topRated_movies);
    });


    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
       console.log(this.upcoming_movies);
    });

    this.movieService.getMoviesNowInTheaters().subscribe(data => {
      this.nowInTheaters_movies = data['results'];
       console.log(this.nowInTheaters_movies);
    });


    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
       console.log(this.popular_movies);
    });

    this.movieService.getPopularKidsMovies().subscribe(data => {
      this.popularKids_movies = data['results'];
       console.log(this.popularKids_movies);
    });

  }
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
       console.log(this.search_result);
    });
  }
  ngOnInit() {
  }
}
