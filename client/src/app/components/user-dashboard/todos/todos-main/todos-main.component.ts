import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoUtilsService } from 'src/app/services/todo-utils.service';
import { Todo } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.css']
})
export class TodosMainComponent implements OnInit, OnDestroy {

  @Input()
  userTodos :Todo[] = [];

  userId :string = '';
  sub :Subscription = new Subscription();
  
  constructor( private userUtils :UserUtilsService ,private todosUtils :TodoUtilsService, private act :ActivatedRoute) { }

  marAsCompleted(todoId :string) {
    let todo = this.userTodos.find(todo => todo._id === todoId);
    todo!.completed = true;
    this.userUtils.userData.todos = this.userTodos;

    // this.sub = this.act.params.subscribe(param => this.userId = param['id']);
    this.userId = this.userUtils.userData._id as string;
    this.sub = this.todosUtils.updateTodos(this.userId, this.userTodos)
      .subscribe(data => console.log(data));
  }
  
  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
