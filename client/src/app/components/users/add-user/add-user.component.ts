import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {

  newUser :User = {
    full_name: '',
    email: ''
  }

  sub :Subscription = new Subscription();

  constructor(private userUtils :UserUtilsService, private router :Router) { }
  
  onSubmit() {
    //post new user to server
    this.sub = this.userUtils.postUser(this.newUser).subscribe(data => {
      // push new user to service
      this.userUtils.postNewUserData(data as User);
      // go to users-main
      this.router.navigate(['/']);
    })
  }
  
  ngOnInit(): void {
    
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
