import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent implements OnInit, OnDestroy {

  sub :Subscription = new Subscription();
  usersData :User[] = [];

  constructor(private userUtils :UserUtilsService) { }

  deleteUser(userId :string) {
    const id :number= this.usersData.findIndex(user => user._id === userId);
    this.usersData.splice(id, 1);
  }

  ngOnInit(): void {
    this.sub = this.userUtils.getAllUsers()
      .subscribe((data :User[])=> {
        console.log(data, typeof data);
        this.usersData = data;
        // this.userUtils.setUserData(data);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
