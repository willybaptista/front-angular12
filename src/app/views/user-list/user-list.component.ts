import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource: any;

  public users: any;
  public loading: boolean = true;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.getUsers();
  }

  async getUsers() {

    await this.userService.getUsers().subscribe(
      {
        next: (data) => {

          this.loading = false;

          console.log(data);

          this.users = data;

          this.dataSource = data;

          console.log(this.users);

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
