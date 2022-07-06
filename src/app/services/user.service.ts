import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from '../interfaces/Response';
import { User } from '../models/User';
import { UserResponse } from '../interfaces/UserResponse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}users`;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  public getUsers(): Observable<Response<User>> {

    const token = this.authService.getUserLogged();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token.access_token
      })
    };

    return this.httpClient.get<Response<User>>(this.apiUrl, httpOptions);

  }

}
