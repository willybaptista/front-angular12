import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

let mockloginServiceData: any = null;
class MockloginService {
  auth(): Observable<any[]> {
    return mockloginServiceData;
  }
}

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      providers: [
        { provide: LoginService, useClass: MockloginService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
