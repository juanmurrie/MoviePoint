import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
    {path: '', redirectTo: "welcome", pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'home', component: HomeComponent},
];
