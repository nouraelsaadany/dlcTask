import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/services/todo.service';
import {NgbModal, NgbActiveModal, ModalDismissReasons, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

  import { from } from 'rxjs';
  import * as $AB from 'jquery';
  declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users : any;
userDetails;

  constructor(private  todoService:TodoService, public modalService: NgbModal) { }

  ngOnInit() {
    this.showUsers();
  }


showUsers(){
    this.todoService.getUsers().subscribe(users=>
      {
this.users= users;
console.log(this.users);

      })
  }


  OpenUserModal(id){

this.users.filter(user => {
  if(user.id==id){
    this.userDetails = user;
    $("#exampleModal").modal('show');

  }
});

}






}
