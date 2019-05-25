import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  private url = 'https://api.themoviedb.org/3/';
  private apikey = 'c8deafc3aa91fe5f48fab331e2b8467d';
  private language = 'en';
  private region = 'US';
  private moviestring: string;
  private id: number;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.moviestring = movie;
    return this._http.get(this.url + 'search/movie?query=' + this.moviestring
      + '&api_key=' + this.apikey + '&language=' + this.language + '&region=' + this.region);
  }

  getTopRatedMovies() {
    return this._http.get(this.url
      + 'discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-04-01&sort_by=vote_average.desc'
      + '&api_key=' + this.apikey + '&language=' + this.language + '&region=' + this.region);
  }

  getUpcomingMovies() {
    return this._http.get(this.url + 'discover/movie?primary_release_date.gte=2019-05-11&primary_release_date.lte=2019-05-30'
      + '&api_key=' + this.apikey + '&language=' + this.language + '&region=' + this.region);
  }

  getMoviesNowInTheaters() {
    return this._http.get(this.url
      + 'discover/movie?certification_country=US&primary_release_date.gte=2019-04-20&primary_release_date.lte=2019-05-10'
      + '&api_key=' + this.apikey + '&language=' + this.language);
  }

  getPopularMovies() {
    return this._http.get(this.url + 'discover/movie?sort_by=popularity.desc'
      + '&api_key=' + this.apikey + '&language=' + this.language + '&region=' + this.region);
  }

  getPopularKidsMovies() {
    return this._http.get(this.url + 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
      + '&api_key=' + this.apikey + '&spoken_languages=' + this.language + '&region=' + this.region);
  }

  getMovie(id: number) {
    return this._http.get(this.url + 'movie/' + id + '?api_key=' + this.apikey);
  }

}
