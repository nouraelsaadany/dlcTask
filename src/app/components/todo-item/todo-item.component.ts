import { Component, OnInit, Input, EventEmitter,Output, TemplateRef } from '@angular/core';
import { TodoModule } from 'src/app/Modules/todo/todo.module';
import {TodoService} from '../../services/todo.service';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    animated: true
  };
@Input() todo: TodoModule;
@Output() deleteTodo: EventEmitter<TodoModule> = new EventEmitter();

  constructor(private todoService:TodoService, modalService:BsModalService) {
 
 }
openModal(){
  //this.modalRef = this.modalService.show(template, this.config);

 }
  

  ngOnInit() {
    this.todoService.getTodos.length==15;
  }

  // Set Dynamic Classes
  setClasses(){
    let classes={
      todo:true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  //onToggle
  onToggle(todo){
    //tOGGLE IN UI
todo.completed= !todo.completed;
// TOGGLE ON SERVER
this.todoService.toggleCompleted(todo).subscribe( todo=>
  console.log(todo));
  }


  //ondELETE
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
}
