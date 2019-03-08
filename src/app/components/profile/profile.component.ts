import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons,
  NgbTimeStruct
} from '@ng-bootstrap/ng-bootstrap';
import {
  TodoService
} from 'src/app/services/todo.service';
import {
  from
} from 'rxjs';
import * as $AB from 'jquery';
import { post } from 'selenium-webdriver/http';

declare var $: any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  posts: any;
  todos:any;
  postDetails;
  id=1;
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.userPosts();
    this.userTodo();
    


  }
  showUser() {
    this.todoService.getUser(1).subscribe(users => {
      this.user = users;
      this.getUserOfThePost();
      console.log(this.user);
      
    })
  }

  userTodo() {
    this.todoService.getTodoOfUser(1).subscribe(todos => {
        this.todos = todos;
        this.showUser();
        console.log(this.todos);
        
        
        

      }

    )

  }

  userPosts() {
    this.todoService.getPostOfUser(1).subscribe(posts => {
        this.posts = posts;
        this.showUser();
        console.log(this.posts);

      }

    )

  }

  
  getUserOfThePost() {
    for (let i = 0; i < this.posts.length; i++) {
  
        if (this.posts[i].userId == this.user.id) {
          this.posts[i].username = this.user.username;
          this.posts[i].name= this.user.name;
          const randomNumber = Math.floor(Math.random() * 6) + 1;

          this.posts[i].img  = "https://mdbootstrap.com/img/Photos/Avatars/img%20(" +randomNumber +").jpg";
        }
      
    }
    console.log(this.posts);

  }

  setClasses(){
    let classes={
      todo:true,
      'is-complete': this.todos[1].completed
    }
    return classes;
  }
}
