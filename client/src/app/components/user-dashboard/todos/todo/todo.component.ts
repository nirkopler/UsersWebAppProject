import { Component, OnInit, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoUtilsService } from 'src/app/services/todo-utils.service';
import { Todo } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  @Input()
  todoData :Todo = {_id: '', title: '', completed: false};
  userId :string = '';

  sub :Subscription = new Subscription();

  constructor(private userUtils :UserUtilsService, private todoUtils :TodoUtilsService, private act :ActivatedRoute) { }

  markAsCompleted() {
    // make todo true
    this.todoData.completed = true;
    // send update to server via todo-utils
    this.todoUtils.updateTodo(this.todoData._id!, this.todoData).subscribe(data => console.log(data));
    // update data to userUtils Service
    this.userUtils.userTodoIsCompleted(this.userId, this.todoData._id!)
  }

  ngOnInit(): void {
    this.sub = this.act.params.subscribe(param => this.userId = param['id']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
