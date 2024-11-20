import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  @Input() genreID!: number;
  @Input() genreName!: string;
  movies: any = [];

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    this.movieService.getMoviesByGenre(this.genreID).subscribe((response) => {
      this.movies = response.results;
    })
  }

  getImage(path: string): string{
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  scrollLeft(): void {
    const carousel = document.querySelector('.carousel-items') as HTMLElement;
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    const carousel = document.querySelector('.carousel-items') as HTMLElement;
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
