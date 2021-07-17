import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  userData :User = {
    full_name: '',
    email: ''
  }

  sub :Subscription = new Subscription();

  otherDataBtn :boolean = false;

  constructor(private userUtils :UserUtilsService) { }

  onSubmit() {
      this.sub = this.userUtils.putUser(this.userData._id as string, this.userData)
      .subscribe(data => console.log(data));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
