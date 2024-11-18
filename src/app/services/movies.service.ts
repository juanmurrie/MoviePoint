import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  // key= f6de734a
  //ejemplo http://www.omdbapi.com/?i=tt3896198&apikey=f6de734a
  private API_URL: string = 'https://www.omdbapi.com/?apikey=f6de734a';

  constructor(private http: HttpClient) { }

  getMovies(searchterm: string): Observable<any> {
    return this.http.get(this.API_URL + '&s=' + searchterm);
  }
}