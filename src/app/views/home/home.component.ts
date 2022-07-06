import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getUsers();

  }

  async getUsers() {

    await this.userService.getUsers().subscribe(
      {
        next: (data) => {

          console.log(data);

          return data;

        },
        error: (error) => {

          console.error(error);

          this.router.navigate(['login']);

        },
        complete: () => console.info('users ok')
      }
    );
  }

}
