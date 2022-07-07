import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public setUserLogged(data: any) {

    localStorage.setItem('user_logged', JSON.stringify(data));

  }

  public getUserLogged() {

    return JSON.parse(localStorage.getItem('user_logged')!);

  }

  public logout() {

    localStorage.removeItem('user_logged');

    this.router.navigate(['login']);

  }

}
