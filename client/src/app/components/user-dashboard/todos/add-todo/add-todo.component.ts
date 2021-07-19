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
    title: '',
    completed: false
  }
  userId :string = '';

  constructor(private todoUtils :TodoUtilsService, private act :ActivatedRoute, private userUtils :UserUtilsService) { }
  
  
  onSubmit() {
    // send data to server
    this.todoUtils.addTodo(this.userId, this.todo).subscribe(data => this.todo._id = data as string);
    // update Service Data
    this.userUtils.pushUserTodo(this.userId, this.todo);
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
