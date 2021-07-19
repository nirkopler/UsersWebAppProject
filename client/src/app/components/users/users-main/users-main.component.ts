import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {
    // get all data from server
    this.sub = this.userUtils.getAllUsers()
      .subscribe((data :User[])=> {
        console.log(data, typeof data);
        //set data to service
        this.userUtils.setUsersData(data);
      });
    
    // set the data of component to data from service
    this.sub = this.userUtils.currentUsersData.subscribe(data => this.usersData = data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
