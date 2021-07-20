import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post, Todo, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserUtilsService {

  uri :string = 'http://localhost:8000/api/users'

  private usersSource = new BehaviorSubject<User[]>([]);
  currentUsersData = this.usersSource.asObservable();

  userId :string = '';

  constructor( private http :HttpClient ) { }

  setUsersData(users :User[]) {
    this.usersSource.next(users);
  }

  updateUserData(userId :string, user :User) {
    const usersArray = this.usersSource.getValue();
    let currentUserIndex = usersArray.findIndex((user :User) => user._id === userId);
    usersArray[currentUserIndex] = user;
    this.usersSource.next(usersArray);
  }

  deleteUserData(userId :string) {
    const usersArray = this.usersSource.getValue();
    const currentUserIndex = usersArray.findIndex((user :User) => user._id === userId);
    usersArray.splice(currentUserIndex, 1);
    this.usersSource.next(usersArray);
  }

  userTodoIsCompleted(userId :string, todoId :string) {
    const usersArray = this.usersSource.getValue();
    let currentUserIndex = usersArray.findIndex((user :User) => user._id === userId);
    usersArray[currentUserIndex].todos?.map((todo :Todo) => {
      todo._id === todoId ? {...todo, completed: true} : todo
    })
    this.usersSource.next(usersArray);
  }

  pushUserTodo(userId :string, todo :Todo) {
    const usersArray = this.usersSource.getValue();
    let currentUserIndex = usersArray.findIndex((user :User) => user._id === userId);
    usersArray[currentUserIndex].todos?.push(todo);
    this.usersSource.next(usersArray);
  }

  pushUserPost(userId :string, post :Post) {
    const usersArray = this.usersSource.getValue();
    let currentUserIndex = usersArray.findIndex((user :User) => user._id === userId);
    usersArray[currentUserIndex].posts?.push(post);
    this.usersSource.next(usersArray);
  }

  getAllUsers() {
    return this.http.get<User[]>(this.uri)
  }

  getUser(id: string) {
    return this.http.get<User>(`${this.uri}/${id}`)
  }

  postUser(user :User) {
    return this.http.post(this.uri, user)
  }

  putUser(id :string, user :User) {
    return this.http.put(`${this.uri}/${id}`, user)
  }

  deleteUser(id :string) {
    return this.http.delete(`${this.uri}/${id}`)
  }
}
