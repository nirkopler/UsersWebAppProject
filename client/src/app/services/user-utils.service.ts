import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserUtilsService {

  uri :string = 'http://localhost:8000/api/users'
  userData :User = {full_name: '', email: ''};

  constructor( private http :HttpClient ) { }

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

  setUserData(user :User) {
    this.userData = user;
  }

  getUserData() :User {
    return this.userData;
  }
}
