import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from "../movies/movie-list.component";
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CarouselComponent} from '../carousel/carousel.component'
import { movies } from '../../interfaces/movies';
import { moviesResponce } from '../../interfaces/moviesResponce';
import { Genres } from '../../interfaces/genres';
import { genresResponce } from '../../interfaces/genresResponce';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MovieListComponent, HttpClientModule, CommonModule, CarouselComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit{

  movies: movies[] = [];
  genres: Genres[] = [];
  
  constructor(private movieService: MoviesService){}
  ngOnInit(): void {
    this.movieService.getGenres().subscribe((response : genresResponce) => {
      this.genres = response.genres;
    })
  }

  searched = false;

  getMovies(searchterm:string) {
    this.movieService.getMoviesBySearchTerm(searchterm).subscribe((response : moviesResponce )=> {
      if(response.results.length === 0){
        this.movies = [];
      }else{
        this.movies = response.results;
      }
      this.searched = true;
    })
  }
}

