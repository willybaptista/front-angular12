import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/interfaces/Login';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() OnSubmit = new EventEmitter<Login>();

  public userAuth: boolean = true;

  login?: Login;

  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  async onSubmit(formDirective: FormGroupDirective) {

    if(this.loginForm.invalid) {
      return;
    }

    const data: Login = this.loginForm.value;

    await this.loginService.auth(data).subscribe(
      {
        next: (data) => {

          console.log(data)

          this.userAuth = true;

          this.authService.setUserLogged(data);

          this.router.navigate(['home']);
        },
        error: (error) => {

          console.error(error)

          this.userAuth = false;

          //this.loginForm.reset();

        },
        complete: () => console.info('logged')
      }
    );
  }

}
