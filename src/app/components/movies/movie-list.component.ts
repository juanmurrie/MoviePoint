import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StorageService} from '../../services/storage.service'

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input('movie') movie: any;

  constructor(private storageService: StorageService){}
  ngOnInit(): void { 
  }

  getImage(path: string): string{
    return this.movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${path}` : 'https://via.placeholder.com/600';
  }
  
  agregarFav(movieId: number){
    if(!this.storageService.estaEnFavoritos(movieId)){
      this.storageService.guardaFav(movieId);
      console.log('guardada con exito');
    } else {
      this.storageService.eliminaFav(movieId)
      console.log('La película ya fue eliminada de favoritos');
    }
  }
}
