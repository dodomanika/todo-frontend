import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

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
    private todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('username').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    );
  }

}
