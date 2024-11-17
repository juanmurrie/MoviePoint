import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  popularMovies = [
    { id: 1, title: 'Pelicula 1', image: 'assets/MoviePoint-logo.webp' },
    { id: 2, title: 'Pelicula 2', image: 'assets/MoviePoint-logo.png' },
    { id: 3, title: 'Pelicula 3', image: 'assets/MoviePoint-logo.png' },
  ];
}
