import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo';
import * as _ from 'lodash';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  editMode: boolean = false;
  todos: Todo[];
  activeItem: Todo = new Todo();

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getAllTodos();

    const todo = new Todo();
    todo.id = 1;
    todo.title = 'test';
    const todo1 = new Todo();
    todo1.id = 2;
    todo1.title = 'test2';
    this.todos.push(todo);
    this.todos.push(todo1);
  }

  ngOnInit() {}
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
    this.editMode = true;
  }

  onDeleteItem(todo: Todo) {
    this.todoService.delete(todo);
    this.activeItem = new Todo();
    // _.remove(this.todosList, (todo1: Todo) => {
    //   return todo1.id === todo.id;
    // });
    // this.activeItem = new Todo();
  }
  onCancelItem(todo: Todo) {
    if (todo.id) {
      const index = _.find(this.todos, (todo1: Todo) => {
        return todo1.id === todo.id;
      });
      if (!_.isUndefined(index)) {
        todo.title = index.title;
      }
    }
  }
  onClearItem() {
    this.activeItem.title = undefined;
  }
  onCloseItem() {
    this.activeItem = new Todo();
    this.editMode = false;
  }
  onAddListItem() {
    this.editMode = true;
  }

  onAddItem(todo: Todo) {
    if (!_.isUndefined(todo)) {
      if (!_.isUndefined(todo.id)) {
        this.todoService.update(todo);
      } else {
        this.todoService.add(todo);
      }
    }
    this.activeItem = new Todo();
    this.editMode = false;
  }
}
