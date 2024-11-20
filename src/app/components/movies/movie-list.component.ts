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
    console.log(this.movie);   
  }

  getImage(path: string): string{
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  popularMovies = [
    { id: 1, title: 'Pelicula 1', image: 'assets/MoviePoint-logo.webp' },
    { id: 2, title: 'Pelicula 2', image: 'assets/MoviePoint-logo.webp' },
    { id: 3, title: 'Pelicula 3', image: 'assets/MoviePoint-logo.webp' },
  ];
}
