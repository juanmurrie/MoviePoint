import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
//password A33Zu!2G$F4isk$
  private apiUrl = 'http://tu-servidor/favoritos';
  favoritos: number[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      this.favoritos = JSON.parse(favoritosGuardados);  
    }
  }

  guardaFav(movieID: number){
    this.favoritos.push(movieID);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  eliminaFav(movieId: number) {
    this.favoritos = this.favoritos.filter(id => id !== movieId);
    localStorage.setItem('favoritos', JSON.stringify([...this.favoritos]));
  }

  estaEnFavoritos(movieId: number) {
    return this.favoritos.includes(movieId);
  }

}