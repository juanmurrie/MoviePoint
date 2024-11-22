import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit,AfterViewInit {
  @Input() genreID!: number;
  @Input() genreName!: string;
  movies: any = [];
  currentPage: number = 1;

  constructor(private movieService: MoviesService){}

  
  ngOnInit(): void {
    this.loadMovies();
  }

  ngAfterViewInit(): void {
    this.movieRow.nativeElement.addEventListener('scroll', () => {
      this.checkEnd();
    })
  }  

  loadMovies(): void{
    this.movieService.getMoviesByGenre(this.genreID,this.currentPage).subscribe((response) => {
      this.movies = [...this.movies, ...response.results];
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
      this.movieRow.nativeElement.scrollBy({ left: 700, behavior: 'smooth' });
    }
  }

  checkEnd(): void{
    if(this.movieRow){
      const elementMovieRow = this.movieRow.nativeElement;

      if(elementMovieRow.scrollLeft + elementMovieRow.clientWidth >= elementMovieRow.scrollWidth - 10){ 
        this.currentPage++;
        this.loadMovies();
      }
    }
  }
}
