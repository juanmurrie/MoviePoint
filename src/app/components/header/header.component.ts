import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router){}

  ngOnInit(): void{
    this.auth.isAuthenticated$.subscribe(isAutenticated => {
      if(isAutenticated){
        this.router.navigate(['/home'])
      }
    })
  }

  logIn(){
    this.auth.loginWithRedirect();

  }

  logOut(){
    this.auth.logout();
  }
}
