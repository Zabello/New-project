import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import * as _ from 'lodash';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  todosList: Todo[];
  activeItem: Todo = new Todo();
  constructor() {
    const todo = new Todo();
    todo.id = 1;
    todo.title = 'test';
    const todo1 = new Todo();
    todo.id = 2;
    todo.title = 'test2';
    this.todosList.push(todo);
    this.todosList.push(todo1);
    // this.activeItem = this.todosList[0];
  }

  ngOnInit() {}
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
  }
  onDeleteItem(todo: Todo) {
    _.remove(this.todosList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
  }
  onAdd(todo: Todo) {
    if (!_.isUndefined(todo)) {
      if (!_.isUndefined(todo.id)) {
        const index = _.find(this.todosList, (todo1: Todo) => {
          return todo1.id === todo.id;
        });
        if (!_.isUndefined(index)) {
          index.title = todo.title;
        }
        this.activeItem = new Todo();
      }
    } else {
      const newElement = new Todo();
      newElement.id = this.getId();
      newElement.title = todo.title;
      this.todosList.push(newElement);
    }
    this.activeItem = new Todo();
  }
  getId(): number {
    const maxId: Todo = _.maxBy(this.todosList, 'id');
    return _.isUndefined(maxId) ? 0 : maxId.id + 1;
  }
}
