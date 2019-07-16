import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string;
  /*= [
    new Todo (1, 'Learn to dance', false, new Date()),
    new Todo (2, 'Become an expert at Angular', false, new Date()),
    new Todo (3, 'Visit India', false, new Date())
    // {id: 1, description: 'Learn to dance'},
    // {id: 2, description: 'Become an expert at Angular'},
    // {id: 3, description: 'Visit India'}
  ];*/

  // an object
  // todo = {
  //   id: 1,
  //   description: 'Learn to dance'
  // }

  constructor(
    private todoService: TodoDataService,
    private  router: Router
  ) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }


  deleteTodo(id) {
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} successful!`;
        this.refreshTodos();
      }
    );
    console.log(`delete todo ${id}`);
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

}
