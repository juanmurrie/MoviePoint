import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {path: '', redirectTo: "Inicio", pathMatch: 'full'},
    {path: 'Inicio', component: WelcomeComponent},
    {path: '**', redirectTo: "Inicio", pathMatch: 'full'},
];
