import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostUtilsService } from 'src/app/services/post-utils.service';
import { Post, Todo } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input()
  postData :Post = {_id: '', title: '', body: ''};
  userId :string = '';

  sub :Subscription = new Subscription();

  constructor(private userUtils :UserUtilsService, private postUtils :PostUtilsService, private act :ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.act.params.subscribe(param => this.userId = param['id']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
