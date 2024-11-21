import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path: '', redirectTo: "welcome", pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'movies/:id', component: MovieDetailsComponent},
    {path: '**', redirectTo: "welcome"},
];
