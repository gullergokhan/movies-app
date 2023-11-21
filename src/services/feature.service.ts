import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/models/movie';
import { environment } from 'src/environments/environment';
import { MovieRoot } from 'src/models/movie-list';
import { CreditsRoot, ReviewRoot } from 'src/models/review';



@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getTopMovies(): Observable<MovieRoot> {
    const url = `${environment.ROOT_URL}movie/popular?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<MovieRoot>(url);
  }

  getMoviesByCategory(category: string): Observable<MovieRoot> {
    const url = `${environment.ROOT_URL}movie/${category}?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<MovieRoot>(url);
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    const url = `${environment.ROOT_URL}movie/${movieId}?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<Movie>(url);
  }

  getMovieReviews(movieId: number): Observable<ReviewRoot> {
    const url = `${environment.ROOT_URL}/movie/${movieId}/reviews?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<ReviewRoot>(url);
  }

  getMovieCredits(movieId: number): Observable<CreditsRoot> {
    const url = `${environment.ROOT_URL}/movie/${movieId}/credits?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<CreditsRoot>(url);
  }

  searchMovies(query: string): Observable<MovieRoot> {
    const url = `${environment.ROOT_URL}/search/movie?api_key=${environment.MOVIEDB_API_KEY}&query=${query}`;
    return this.httpClient.get<MovieRoot>(url);
  }
  
  
  getMovieById(movie_id: number) {
    let newPath = `${environment.ROOT_URL}movie/${movie_id}?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get(newPath);
  }
}
