import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { moviesResponce } from '../interfaces/moviesResponce';
import { genresResponce } from '../interfaces/genresResponce';
import { movies } from '../interfaces/movies';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  //private API_URL: string = 'https://www.omdbapi.com/?apikey=f6de734a';

  private apiKey: string = 'api_key=ec2acbf8ed4dd8e682b04569c09f6cf8';
  private apiURL: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMoviesByGenre(genreID: number, page: number): Observable<moviesResponce> {
    return this.http.get<moviesResponce>(`${this.apiURL}/discover/movie?${this.apiKey}&with_genres=${genreID}&page=${page}&language=es-ES`);//agregue page
  }

  getGenres(): Observable<genresResponce> {
    return this.http.get<genresResponce>(`${this.apiURL}/genre/movie/list?${this.apiKey}&language=es-ES`);
  }

  getMoviesBySearchTerm(searchterm: string): Observable<moviesResponce> {
    return this.http.get<moviesResponce>(`${this.apiURL}/search/movie?${this.apiKey}&query=${searchterm}&language=es-ES`);
  }

  getMovieDetails(movieId: number): Observable<movies> {
    return this.http.get<movies>(`${this.apiURL}/movie/${movieId}?${this.apiKey}&language=es-ES`);
  }
}