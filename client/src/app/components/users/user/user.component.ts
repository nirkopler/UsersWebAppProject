import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  @Input()
  userData :User = {full_name: '', email: ''}
  selectedUserId :string = '';

  otherDataBtn :boolean = false;
  sub :Subscription = new Subscription();

  constructor(private userUtils :UserUtilsService, private router :Router) { }

  // on form submission
  onSubmit() {
      this.sub = this.userUtils.putUser(this.userData._id!, this.userData)
      .subscribe(data => console.log(data));
      this.userUtils.updateUserData(this.userData._id!, this.userData);
  }

  // on click on delete user
  deleteUser() {
    this.sub = this.userUtils.deleteUser(this.userData._id!)
      .subscribe(data => console.log(data));
    this.userUtils.deleteUserData(this.userData._id!)
  }

  //checkes if all user todo are completed
  userTodosStatus() :boolean {
    if (this.userData.todos!.length > 0) {
      return !this.userData.todos!.map(todo => todo.completed).includes(false)
    } else { return false }
  }

  // colors user background
  selectedUser() :boolean{
    return (this.userData._id === this.userUtils.userId) ? true : false;
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
  
  goToDashboard() {
    this.userUtils.userId = this.userData._id as string;
    this.redirectTo(this.userData._id as string)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
