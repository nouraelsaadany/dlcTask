import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http'
import {
  TodoModule
} from 'src/app/Modules/todo/todo.module';
import {
  Observable
} from 'rxjs';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  GetTodosUrl: string =
    'https://jsonplaceholder.typicode.com/todos'

  GetUsersUrl: string =
    'https://jsonplaceholder.typicode.com/users'

  GetTodosIdUrl: string =
    'https://jsonplaceholder.typicode.com/todos/:id'

  GetPostsUrl: string =
    'https://jsonplaceholder.typicode.com/posts'

  GetPostsIdUrl: string =
    'https://jsonplaceholder.typicode.com/posts/:id'

  GetUsersIdUrl: string =
    'https://jsonplaceholder.typicode.com/users/:id'

  //todosLimit= '?_limit=15';
  constructor(private http: HttpClient) {}
  getTodos(): Observable < TodoModule[] > {
    return this.http.get < TodoModule[] > (`${this.GetTodosUrl}`);
  }
  //Deleting todo
  deleteTodo(todo: TodoModule): Observable < TodoModule > {
    const url = `${this.GetTodosUrl}/${todo.id}`;
    return this.http.delete < TodoModule > (url, httpOptions)
  }

  toggleCompleted(todo: TodoModule): Observable < any > {
    const url = `${this.GetTodosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions)
  }
  // Add Todo
  addTodo(todo: TodoModule): Observable < TodoModule > {
    return this.http.post < TodoModule > (this.GetTodosUrl, todo, httpOptions);
  }
  getPost(id) {
    return this.http.get(`/api/posts/${id}`);
  }
  getPosts() {
    return this.http.get(`/api/posts`);
  }

  getUsers() {

    return this.http.get("/api/users");
  }
  getUser(id) {
    return this.http.get(`/api/users/${id}`);
  }
  getPostOfUser(id) {
    return this.http.get(`/api/posts?userId=${id}`);
  }
  getTodoOfUser(id) {
    return this.http.get(`/api/todos?userId=${id}`);
  }
  getTodo(id) {
    return this.http.get(`/api/posts/${id}`);
  }

}
