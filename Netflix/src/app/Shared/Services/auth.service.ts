declare var google:any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Router=inject(Router)
  constructor() { }

  signOut(){
    
    google.accounts.id.disableAutoSelect();
    this.Router.navigate(['/']);
  }
}
