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
  
  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnDestroy() {
  }
}
