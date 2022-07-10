import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data login', () => {

    const data = {
      email: 'teste',
      password: 'teste'
    }

    const responseLogin = {
      response: [{
        access_token: 'teste',
        token_type: 'teste',
        expires_in: 'teste'
      }]
    };

  });

  afterEach(() => {
    httpController.verify();
  });

});
