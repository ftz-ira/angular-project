import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private autheService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.autheService.isAuth;
  }

  onSignIn() {
    
    this.autheService.signIn().then(
       () => {
      this.authStatus = this.autheService.isAuth;
      this.router.navigate(['appareils']);
    })
  };

  onSignOut(){
    this.autheService.signOut();
    this.authStatus = this.autheService.isAuth;
    console.log('sign out');
  }

}
