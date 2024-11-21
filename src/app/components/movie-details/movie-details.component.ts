import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { movies } from '../../interfaces/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  movieId!: number;
  movieDetails!: movies;
  genreNames: string[] = [];

  constructor(private movieService:MoviesService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id')!;//obtengo el id desde la url con paramMap y lo convierto a num
    this.fetchDetails();
  }

  fetchDetails(): void{
    this.movieService.getMovieDetails(this.movieId).subscribe((response) => {
      this.movieDetails = response;
      this.genreNames = response.genres.map(g => g.name);//mapeo los nombres de los generos
    });
  }

  getImage(path: string | null): string{
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

}
