import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  @Input()
  userData :User = {
    full_name: '',
    email: ''
  }

  @Output() delete = new EventEmitter<string>();

  areAllCompleted : boolean = false;
  otherDataBtn :boolean = false;
  sub :Subscription = new Subscription();

  constructor(private userUtils :UserUtilsService, private router :Router) { }

  onSubmit() {
      this.sub = this.userUtils.putUser(this.userData._id!, this.userData)
      .subscribe(data => console.log(data));
  }

  deleteUser() {
    this.sub = this.userUtils.deleteUser(this.userData._id!)
      .subscribe(data => console.log(data));
    this.delete.emit(this.userData._id);
  }

  userTodosStatus() :boolean {
    if (this.userData.todos!.length > 0) {
      return !this.userData.todos!.map(todo => todo.completed).includes(false)
    } else { return false }
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
  
  goToDashboard() {
    this.userUtils.userData = this.userData;
    this.redirectTo(this.userData._id as string)
  }

  ngOnInit(): void {
    this.areAllCompleted = this.userTodosStatus();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
