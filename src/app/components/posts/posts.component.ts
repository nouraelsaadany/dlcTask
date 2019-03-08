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
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  users: any;
  posts: any;
  postDetails;

  constructor(private todoService: TodoService, public modalService: NgbModal) {}

  ngOnInit() {
    this.showPosts()


  }
  showUsers() {
    this.todoService.getUsers().subscribe(users => {
      this.users = users;
      this.getUserOfThePost();
    })
  }

  showPosts() {
    this.todoService.getPosts().subscribe(posts => {
        this.posts = posts;
        this.showUsers();
        console.log(this.posts);

      }

    )

  }
  getUserOfThePost() {
    for (let i = 0; i < this.posts.length; i++) {
      for (let j = 0; j < this.users.length; j++) {
        if (this.posts[i].userId == this.users[j].id) {
          this.posts[i].username = this.users[j].username;
          this.posts[i].name= this.users[j].name;
          const randomNumber = Math.floor(Math.random() * 6) + 1;

          this.posts[i].img  = "https://mdbootstrap.com/img/Photos/Avatars/img%10(" +randomNumber +").jpg";
        }
      }
    }
    console.log(this.posts);

  }
  OpenUserModal(id){
console.log(id);

    this.posts.filter(post => {
      if(post.id==id){
        this.postDetails = post;
    
      
        $("#exampleModal").modal('show');

      }
    });
}
}
