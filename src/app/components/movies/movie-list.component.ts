import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input('movie') movie: any;

  constructor(){}
  ngOnInit(): void { 
  }

  getImage(path: string): string{
    return this.movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${path}` : 'https://via.placeholder.com/600';
  }
}
