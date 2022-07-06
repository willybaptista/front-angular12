import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';
import { LoginResponse } from '../interfaces/LoginResponse';
import { Login } from '../interfaces/Login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}auth/login`;

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

}
