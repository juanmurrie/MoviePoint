import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {StorageService} from '../../services/storage.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fav-carousel',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './fav-carousel.component.html',
  styleUrl: './fav-carousel.component.css'
})
export class FavCarouselComponent {

  @Input() genreID!: number;
  @Input() genreName!: string;
  movies: any = [];
  currentPage: number = 1;
  favoritos: number []=[];

  constructor(private movieService: MoviesService, private storageService:StorageService){}

  ngOnInit(): void {
    this.favoritos=this.storageService.favoritos;
    console.log(this.favoritos);
    this.fetchFavMovie();
    console.log(this.movies);
  }

  fetchFavMovie() {
    const movieObservables = this.favoritos.map(movieId => this.movieService.getMovieByID(movieId));
    forkJoin(movieObservables).subscribe(movies => {
      this.movies = movies;
    });
  }

  ngAfterViewInit(): void {
    this.movieRow.nativeElement.addEventListener('scroll', () => {//uso el evento scroll que tiene un listener para saber si se llego al final
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

  @ViewChild('movieRow',{static: false}) movieRow!: ElementRef; //es un decorador de angular que me permite acceder a elementos del DOM o otrso componentes hijos dentro de la plantilla del componente, movieRow es el identificador utilizado en el html como #movieRow para referenciar un elemento especifico. el static false es para que esta referencia se inicialice depuses de renderizar la vista, al generarse dinamicamnte con un for es util en este caso. Usar Viewchild y elementref permite manipular un contenedor especifico del DOM, incluso cuando hay multiples instancias del componente en la misma pagina.
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

      if(elementMovieRow.scrollLeft + elementMovieRow.clientWidth >= elementMovieRow.scrollWidth - 10){ //evaluo si el usuario llego al final con un margen de 10px
        this.currentPage++;
        this.loadMovies();
      }
    }
  }
}