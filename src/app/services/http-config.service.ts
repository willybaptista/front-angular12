import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  constructor(private authService: AuthService) { }

  httpConfig() {

    const token = this.authService.getUserLogged();

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
      })
    };
  }
}
