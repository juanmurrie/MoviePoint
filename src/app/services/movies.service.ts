import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { moviesResponce } from '../interfaces/moviesResponce';
import { genresResponce } from '../interfaces/genresResponce';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  //private API_URL: string = 'https://www.omdbapi.com/?apikey=f6de734a';

  private apiKey: string = 'api_key=ec2acbf8ed4dd8e682b04569c09f6cf8';
  private apiURL: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMoviesByGenre(genreID: number, page: number): Observable<moviesResponce> {
    return this.http.get<moviesResponce>(`${this.apiURL}/discover/movie?${this.apiKey}&with_genres=${genreID}&page=${page}`);//agregue page
  }

  getGenres(): Observable<genresResponce> {
    return this.http.get<genresResponce>(`${this.apiURL}/genre/movie/list?${this.apiKey}`);
  }

  getMoviesBySearchTerm(searchterm: string): Observable<moviesResponce> {
    return this.http.get<moviesResponce>(`${this.apiURL}/search/movie?${this.apiKey}&query=${searchterm}`);
  }
}