import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TodoListComponent} from './components/todo-list/todo-list.component'
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {path: '', component: TodoListComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Users', component: UsersComponent},
  {path: 'Posts', component: PostsComponent},
  {path: 'Profile', component: ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
