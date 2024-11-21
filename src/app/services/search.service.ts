import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private isSearching = new BehaviorSubject<boolean>(false);
  isSearching$ = this.isSearching.asObservable();

  setIsSearching(estado: boolean): void{
    this.isSearching.next(estado);
  }
}
