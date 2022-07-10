import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Response } from '../interfaces/Response';
import { User } from '../models/User';
import { HttpConfigService } from './http-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}users`;

  constructor(
    private httpClient: HttpClient,
    private httpConfigService: HttpConfigService
  ) {

  }

  public getUsers(): Observable<Response<User>> {

    const httpOptions = this.httpConfigService.httpConfig();

    return this.httpClient.get<Response<User>>(this.apiUrl, httpOptions);

  }

}
