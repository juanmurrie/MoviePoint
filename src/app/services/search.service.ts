import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private isSearching = new BehaviorSubject<boolean>(false);
  isSearching$ = this.isSearching.asObservable();

  setIsSearching(estado: boolean): void{
    this.isSearching.next(estado);
  }


  private moviesSubject = new BehaviorSubject<movies[]>([]);
  movies$ = this.moviesSubject.asObservable();

  setMovies(movies: movies[]): void {
     this.moviesSubject.next(movies);
  }
}
