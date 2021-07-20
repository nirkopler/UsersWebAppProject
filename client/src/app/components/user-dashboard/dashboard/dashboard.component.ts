import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  userData :User = {full_name: '', email: ''};
  userId :string = '';

  addTodoBtn :boolean = false;
  addPostBtn :boolean = false;

  sub :Subscription = new Subscription();

  constructor(private userUtils :UserUtilsService, private act :ActivatedRoute) { }

  ngOnInit(): void {
    // get the url params
    this.sub = this.act.params.subscribe(param => this.userId = param['id']);
    // get data of user from service by user id
    this.sub = this.userUtils.currentUsersData.subscribe(data => this.userData = data.find(user => user._id == this.userId) as User);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
