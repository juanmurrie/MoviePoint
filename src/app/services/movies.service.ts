import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  // key= f6de734a
  //ejemplo http://www.omdbapi.com/?i=tt3896198&apikey=f6de734a
  //private API_URL: string = 'https://www.omdbapi.com/?apikey=f6de734a';

  private apiKey: string = 'api_key=ec2acbf8ed4dd8e682b04569c09f6cf8';
  private apiURL: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMoviesByGenre(genreID: number): Observable<any> {
    return this.http.get(`${this.apiURL}/discover/movie?${this.apiKey}&with_genres=${genreID}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.apiURL}/genre/movie/list?${this.apiKey}`);
  }

  getMoviesBySearchTerm(searchterm: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search/movie?${this.apiKey}&query=${searchterm}`);
  }
}