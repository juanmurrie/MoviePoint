import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';
import { CarouselComponent } from "../carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { Genres } from '../../interfaces/genres';
import { FavCarouselComponent } from '../fav-carousel/fav-carousel.component';
import { StorageService} from '../../services/storage.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, HttpClientModule, CarouselComponent, CommonModule, FavCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  genres: Genres[] = [];
  isSearching = false
  favoritos: number[]=[];

  constructor(private movieService: MoviesService, private searchService: SearchService, private storageService: StorageService){}

  ngOnInit(): void {
    this.favoritos=this.storageService.favoritos;
    this.searchService.isSearching$.subscribe((estado) => {
      this.isSearching = estado;
    })

    this.movieService.getGenres().subscribe((response) => {
      this.genres = response.genres;
    })
  }

}
