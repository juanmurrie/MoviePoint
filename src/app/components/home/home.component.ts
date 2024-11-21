import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';
import { CarouselComponent } from "../carousel/carousel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, HttpClientModule, CarouselComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

 // genres: any[] = [];

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    //this.movieService.getGenres().subscribe((response) => {
    //  this.genres = response.genres;
    //})
  }

}
