import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoUtilsService } from 'src/app/services/todo-utils.service';
import { Todo } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit, OnDestroy {

  @Output() back = new EventEmitter<boolean>();

  sub :Subscription = new Subscription();

  todo :Todo = {
    title: ''
  }
  userId :string = '';

  constructor(private todoUtils :TodoUtilsService, private act :ActivatedRoute, private userUtils :UserUtilsService) { }
  
  onSubmit() {
    // send data to server
    this.todoUtils.addTodo(this.userId, this.todo).subscribe(data => {
      // when data arrives update the userUtiles Service
      this.userUtils.pushUserTodo(this.userId, data as Todo);
    });
    //go back
    this.goBack();
  }
  
  goBack() {
    this.back.emit(false);
  }
  
  ngOnInit(): void {
    this.sub = this.act.params.subscribe(param => this.userId = param['id']);
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
