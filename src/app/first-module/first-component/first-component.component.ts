import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo';
import * as _ from 'lodash';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  editMode: boolean = false;
  todosList: Todo[] = [];
  // переменная в которой хранится значения массива
  activeItem: Todo = new Todo();
  // переменная с которой мы работаем
  itemArray: Todo = new Todo();
  // переменная в которой хронится значение для вывода значения выбранного элемента
  constructor() {
    const todo = new Todo();
    // создает переменную типа Todo
    todo.id = 1;
    // присваивает значение id
    todo.title = 'test';
    // присваивает значение title
    const todo1 = new Todo();
    todo1.id = 2;
    todo1.title = 'test2';
    this.todosList.push(todo);
    // отправляет переменную в todolist
    this.todosList.push(todo1);
  }

  ngOnInit() {}
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
    // клонирует значение
    this.itemArray = _.clone(todo);
    this.editMode = true;
  }

  onDeleteItem(todo: Todo) {
    _.remove(this.todosList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
    // ищет значение по массиву и после нахождения совапдения, удаляет его
  }
  onCancelItem(todo: Todo) {
    if (todo.id) {
      const index = _.find(this.todosList, (todo1: Todo) => {
        return todo1.id === todo.id;
      });
      if (!_.isUndefined(index)) {
        todo.title = index.title;
      }
    }
    // ищет значение по масиву и после нахождения подставляет значение title.
  }
  onClearItem() {
    this.activeItem.title = undefined;
    // удаляет значение title
  }
  onCloseItem() {
    this.activeItem = new Todo();
    // чистит полностью элемент
    this.editMode = false;
  }
  onAddListItem() {
    this.editMode = true;
  }
  // не сделал

  onAddItem(todo: Todo) {
    if (!_.isUndefined(todo)) {
      if (!_.isUndefined(todo.id)) {
        const index = _.find(this.todosList, (todo1: Todo) => {
          return todo1.id === todo.id;
        });
        if (!_.isUndefined(index)) {
          index.title = todo.title;
        }
        this.activeItem = new Todo();
      } else {
        const newElement = new Todo();
        newElement.id = this.getId();
        newElement.title = todo.title;
        this.todosList.push(newElement);
      }
    }
    this.activeItem = new Todo();
    this.editMode = false;
  }
  // добовляет элементы

  getId(): number {
    const maxId: Todo = _.maxBy(this.todosList, 'id');
    return _.isUndefined(maxId) ? 0 : maxId.id + 1;
  }
  // гинерит id
}
