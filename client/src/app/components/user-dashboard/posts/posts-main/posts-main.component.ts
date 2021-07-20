import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/services/user';

@Component({
  selector: 'app-posts-main',
  templateUrl: './posts-main.component.html',
  styleUrls: ['./posts-main.component.css']
})
export class PostsMainComponent implements OnInit {

  @Input()
  userPosts :Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
