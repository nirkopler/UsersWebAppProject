import { Component, OnInit, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/services/user';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  @Input()
  todoData :Todo = {_id: '', title: '', completed: false}

  @Output() todoMarkAsCompleted = new EventEmitter<string>();

  sub :Subscription = new Subscription();

  constructor(private router :Router) { }

  markAsCompleted() {
    this.todoData.completed = true;
    this.todoMarkAsCompleted.emit(this.todoData._id);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
