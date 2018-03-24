import { Injectable } from '@angular/core';
import { Todo } from '../first-component/todo';
import * as _ from 'lodash';
@Injectable()
export class TodoService {
  todoList: Todo[] = [];
  activeItem: Todo = new Todo();
  constructor() {}

  add(todo: Todo) {
    const newElement = new Todo();
    newElement.id = this.getId();
    newElement.title = todo.title;
    this.todoList.push(newElement);
  }
  getTodo(id: number): Todo {
    return _.find(this.todoList, (todo1: Todo) => {
      return todo1.id === id;
    });
  }

  getAllTodos(): Todo[] {
    return this.todoList;
  }

  update(todo: Todo) {
    const index = _.find(this.todoList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
    if (!_.isUndefined(index)) {
      index.title = todo.title;
    }
  }

  delete(todo: Todo) {
    _.remove(this.todoList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
  }
  getId(): number {
    const maxId: Todo = _.maxBy(this.todoList, 'id');
    return _.isUndefined(maxId) ? 0 : maxId.id + 1;
  }
}
