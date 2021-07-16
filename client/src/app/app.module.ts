// App Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// App Routing
import { AppRoutingModule } from './app-routing.module';

// App Components
import { AppComponent } from './app.component';
import { UsersMainComponent } from './components/users/users-main/users-main.component';
import { UserComponent } from './components/users/user/user.component';
import { TodosMainComponent } from './components/user-dashboard/todos/todos-main/todos-main.component';
import { TodoComponent } from './components/user-dashboard/todos/todo/todo.component';
import { AddTodoComponent } from './components/user-dashboard/todos/add-todo/add-todo.component';
import { PostsMainComponent } from './components/user-dashboard/posts/posts-main/posts-main.component';
import { PostComponent } from './components/user-dashboard/posts/post/post.component';
import { AddPostComponent } from './components/user-dashboard/posts/add-post/add-post.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersMainComponent,
    UserComponent,
    TodosMainComponent,
    TodoComponent,
    AddTodoComponent,
    PostsMainComponent,
    PostComponent,
    AddPostComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
