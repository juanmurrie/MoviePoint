import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SearchBarComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
