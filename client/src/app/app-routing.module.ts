import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/user-dashboard/dashboard/dashboard.component';
import { AddTodoComponent } from './components/user-dashboard/todos/add-todo/add-todo.component';

const routes: Routes = [
  { path: ':id', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
