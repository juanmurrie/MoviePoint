import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(public auth:AuthService, private router:Router){}

  ngOnInit(): void{
    this.auth.isAuthenticated$.subscribe(isAutenticated => {
      if(isAutenticated && this.router.url === '/welcome'){
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
