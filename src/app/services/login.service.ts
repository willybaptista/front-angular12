import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';
import { LoginResponse } from '../interfaces/LoginResponse';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://apilaravel8.localhost/api/auth/login';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public auth(data: Login): Observable<Response<LoginResponse>> {
    return this.httpClient.post<Response<LoginResponse>>(this.apiUrl, data, this.httpOptions);
  }

  public get() {

  }

  public put() {

  }

  public delete() {

  }

}
