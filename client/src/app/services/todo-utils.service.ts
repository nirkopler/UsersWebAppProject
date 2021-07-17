import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './user';

@Injectable({
  providedIn: 'root'
})
export class TodoUtilsService {

  uri :string = 'http://localhost:8000/api/users'

  constructor(private http :HttpClient) { }
  
  updateTodos(id :string, todos :Todo[]) {
    return this.http.put(`${this.uri}/${id}`, {todos: todos })
  }

}
