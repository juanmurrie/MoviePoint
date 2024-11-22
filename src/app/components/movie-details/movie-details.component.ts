import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { movies } from '../../interfaces/movies';
import { ActivatedRoute } from '@angular/router';
import { Genres } from '../../interfaces/genres';
import {StorageService} from '../../services/storage.service';

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

  constructor(private movieService:MoviesService, private route:ActivatedRoute, private storageService:StorageService){}

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchDetails();
  }

  fetchDetails(): void{
    this.movieService.getMovieDetails(this.movieId).subscribe((response) => {
      this.movieDetails = response;
      this.genreNames = response.genres.map(g => g.name);
    });
  }

  getImage(path: string | null): string{
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  esFav(movieId: number){
    return this.storageService.estaEnFavoritos(movieId);
  }

  agregarFav(movieId: number){
    this.storageService.guardaFav(movieId);
  }
  eliminarFav(movieId: number){
    this.storageService.eliminaFav(movieId)
  }

  goToMovieHomePage(homepage: string): void{
    if(homepage){
      window.open(homepage, '_blank')
    }else{
      alert('No hay sitio web disponible para esta pelicula');
    }
  }
}
