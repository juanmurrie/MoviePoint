import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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


  @ViewChild('movieRow',{static: false}) movieRow!: ElementRef;

  scrollLeft(){
    if (this.movieRow){
      this.movieRow.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
    }
  }

  scrollRight(){
    if(this.movieRow){
      this.movieRow.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
    }
  }
}
