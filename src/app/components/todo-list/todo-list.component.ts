import {
  Component,
  OnInit
} from '@angular/core';
import {
  TodoService
} from '../../services/todo.service'
import {
  TodoModule
} from 'src/app/Modules/todo/todo.module';
import {
  log
} from 'util';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any;
  users: any;

  todoTitle: string;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTodos();
    this.FetchUsers();

  }

  fetchTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  FetchUsers() {
    this.todoService.getUsers().subscribe(users => {
      this.users = users;
      this.getUserOfThePost();

    })

  }

  getUserOfThePost() {
    for (let i = 0; i < this.todos.length; i++) {
      for (let j = 0; j < this.users.length; j++) {
        if (this.todos[i].userId == this.users[j].id) {
          this.todos[i].username = this.users[j].username;
        }
      }
    }
    //console.log(this.todos);

  }

  deleteTodo(todo: TodoModule) {
    // im returning everything except the todo that was deleted
    this.todos = this.todos.filter(todoo => todoo.id !== todo.id);
    // removing it from the server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: TodoModule) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }
}
