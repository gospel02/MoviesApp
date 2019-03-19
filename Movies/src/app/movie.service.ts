import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  private url = 'https://api.themoviedb.org/3/';
  private api_key = 'c8deafc3aa91fe5f48fab331e2b8467d';
  private movie_string: string;
  private id: number;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this._http.get(this.url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
  }

  getTopRatedMovies() {
    return this._http.get(this.url + 'discover/movie?sort_by=vote_average.desc' + '&api_key=' + this.api_key);
  }

  getUpcomingMovies() {
    return this._http.get(this.url + 'discover/movie?primary_release_date.gte=2019-03-30&primary_release_date.lte=2019-05-15' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this._http.get(this.url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this._http.get(this.url + 'movie/' + id + '?api_key=' + this.api_key);
  }

}
