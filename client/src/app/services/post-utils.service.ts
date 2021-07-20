import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './user';

@Injectable({
  providedIn: 'root'
})
export class PostUtilsService {

  uri :string = 'http://localhost:8000/api/posts/'

  constructor(private http :HttpClient) { }

  addPost(userId :string, post :Post) {
    return this.http.post(`${this.uri}/${userId}`, post);
  }
}
