import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { MoviesService } from '../../services/movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MovieListComponent, HttpClientModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit{

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    
  }

  getMovies(searchterm:string) {
    this.movieService.getMovies(searchterm).subscribe(data => {
      console.log(data);
    })
  }
}

