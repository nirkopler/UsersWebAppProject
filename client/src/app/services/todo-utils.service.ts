import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './user';

@Injectable({
  providedIn: 'root'
})

// Service for Todos CRUD
export class TodoUtilsService {

  uri :string = 'http://localhost:8000/api/todos/'

  constructor(private http :HttpClient) { }
  
  updateTodo(todoId :string, todo :Todo) {
    return this.http.put(`${this.uri}/${todoId}`, todo);
  }

  addTodo(userId :string, todo :Todo) {
    return this.http.post(`${this.uri}/${userId}`, todo);
  }

}
