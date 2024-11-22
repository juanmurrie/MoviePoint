import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';
import { CarouselComponent } from "../carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { Genres } from '../../interfaces/genres';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, HttpClientModule, CarouselComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  genres: Genres[] = [];
  isSearching = false;
  noMovies = false;

  constructor(private movieService: MoviesService, private searchService: SearchService){}

  ngOnInit(): void {
    this.searchService.isSearching$.subscribe((estado) => {
      this.isSearching = estado;
    })

    this.movieService.getGenres().subscribe((response) => {
      this.genres = response.genres;
    })
  }

  handSearchEvent(searchedEstado: boolean): void{
    this.noMovies = searchedEstado;
  }

}
