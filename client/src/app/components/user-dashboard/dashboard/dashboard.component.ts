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

  sub :Subscription = new Subscription();

  constructor(private userUtils :UserUtilsService, private act :ActivatedRoute) { }

  getUserData() {
    // this.sub = this.act.params.subscribe(param => this.userId = param['id']);
    // this.sub = this.userUtils.getUser(this.userId).subscribe(data => this.userData = data);
    this.userData = this.userUtils.userData;
  }

  ngOnInit(): void {
    this.getUserData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
