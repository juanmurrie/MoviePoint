import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from "../movies/movie-list.component";
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MovieListComponent, HttpClientModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit{

  movies: any[]=[];

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    
  }

  getMovies(searchterm:string) {
    this.movieService.getMovies(searchterm).subscribe(data => {
      console.log(data);
      this.movies=data.search;
    })
  }
}

