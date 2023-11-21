import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from 'src/models/movie';
import { MovieResponse } from 'src/models/movie-response';
import {  Genre, GenresResponse } from 'src/models/genre';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGM1M2Q0N2UyY2Q1ZTI2OWMxMDk4MWY2NWJiNGQ2ZiIsInN1YiI6IjYyNDU5MGQ1Yzc0MGQ5MDA0N2I0MmNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ee5PKYQCJTqm8uA2qA18ppGZKYJSHcMDdQnSkBwmC3w ";
  MovieList!: Movie[];
  topTenMovieList!: Movie[];
  filteredMovieList!: Movie[];
  public watchList: any[] = [];

  constructor(private http: HttpClient) {

  }

  // For Slider
  getTopTenMovies(): void {
    this.http.get<MovieResponse>('https://api.themoviedb.org/3/trending/movie/day?api_key', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((MovieResponse: MovieResponse) => {
      this.topTenMovieList = MovieResponse.results.slice(0, 10);
    })
  }


  getNowPlayingMovies(): void {
    this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((MovieResponse: MovieResponse) => {
      this.MovieList = MovieResponse.results;
      this.filteredMovieList = MovieResponse.results;
    })
  }




  getPopularMovies(): void {
    this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((MovieResponse: MovieResponse) => {
      this.MovieList = MovieResponse.results.slice(0, 10); ;
    })
  }





  getMoviesGenres(): Observable<Genre[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey);

    return this.http.get<GenresResponse>('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey, { headers })
      .pipe(
        map((res: GenresResponse) => res['genres'].slice(0, 20)) 
      );
  }

  getMoviesByGenre(genreId: string, pageNumber: number): Observable<Movie[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey);
    return this.http
      .get<MovieResponse>(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`,
        { headers }
      )
      .pipe(
        map((res: MovieResponse) => res.results) 
      );
  }


 

  
 
}
