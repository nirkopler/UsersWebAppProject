import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent implements OnInit {

  sub :Subscription = new Subscription();
  usersData :User[] = [];

  constructor(private userUtils :UserUtilsService) { }

  ngOnInit(): void {
    this.sub = this.userUtils.getAllUsers()
      .subscribe(data => {
        console.log(data, typeof data);
        this.usersData = data;
        this.userUtils.setUserData(data);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
