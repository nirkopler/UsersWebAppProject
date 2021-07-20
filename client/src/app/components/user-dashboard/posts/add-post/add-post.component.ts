import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostUtilsService } from 'src/app/services/post-utils.service';
import { Post } from 'src/app/services/user';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() back = new EventEmitter<boolean>();

  sub :Subscription = new Subscription();

  post :Post = {
    title: '',
    body: ''
  }

  userId :string = '';

  constructor(private postUtils :PostUtilsService, private act :ActivatedRoute, private userUtils :UserUtilsService) { }

  onSubmit() {
    // // send data to server
    this.postUtils.addPost(this.userId, this.post).subscribe(data => {
    //   // when data arrives update the userUtiles Service
      this.userUtils.pushUserPost(this.userId, data as Post);
    });
    // //go back
    this.goBack();
  }

  goBack() {
    this.back.emit(false);
  }

  ngOnInit(): void {
    this.sub = this.act.params.subscribe(param => this.userId = param['id']);
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
