import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setUserLogged(data: any) {

    localStorage.setItem('user_logged', JSON.stringify(data));

  }

  public getUserLogged() {

    return JSON.parse(localStorage.getItem('user_logged')!);

  }

}
