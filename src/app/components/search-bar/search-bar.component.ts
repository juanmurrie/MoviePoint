import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from "../movies/movie-list.component";
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MovieListComponent, HttpClientModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit{

  movies: any[] = [];
  populares = [
      {
        "adult": false,
        "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 912649,
        "original_language": "en",
        "original_title": "Venom: The Last Dance",
        "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        "popularity": 3197.278,
        "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        "release_date": "2024-10-22",
        "title": "Venom: The Last Dance",
        "video": false,
        "vote_average": 6.468,
        "vote_count": 765
    },
    {
        "adult": false,
        "backdrop_path": "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
        "genre_ids": [
            18,
            28,
            27
        ],
        "id": 1118031,
        "original_language": "es",
        "original_title": "Apocalipsis Z: el principio del fin",
        "overview": "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
        "popularity": 1861.349,
        "poster_path": "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
        "release_date": "2024-10-04",
        "title": "Apocalypse Z: The Beginning of the End",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 486
    },
    {
        "adult": false,
        "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
        "genre_ids": [
            28,
            12,
            18
        ],
        "id": 558449,
        "original_language": "en",
        "original_title": "Gladiator II",
        "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        "popularity": 1978.412,
        "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "release_date": "2024-11-13",
        "title": "Gladiator II",
        "video": false,
        "vote_average": 6.831,
        "vote_count": 411
    }
  ];
  
  constructor(private movieService: MoviesService){}
  ngOnInit(): void {
  }

  searched = false;

  getMovies(searchterm:string) {
    this.movieService.getMoviesBySearchTerm(searchterm).subscribe(response => {
      if(response.results === "False"){
        this.movies = [];
      }else{
        this.movies = response.results;
      }
      this.searched = true;
    })
  }
}

