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
  // переменная для установки значения положения кнопки
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
    // отправляет переменную в todolist
  }

  ngOnInit() {}
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
    // клонирует значение
    this.itemArray = _.clone(todo);
    // клонирует значение
    this.editMode = true;
    // изменяет значение состояния кнопки
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
    this.itemArray = new Todo();
    // чистит полностью элемент в строке над инпутом
    this.editMode = false;
    // изменяет значение состояния кнопки
  }
  onAddListItem() {
    this.editMode = true;
    // изменяет значение состояния кнопки
  }

  onAddItem(todo: Todo) {
    if (!_.isUndefined(todo)) {
      // проверяет на наличие значения в инпуте
      if (!_.isUndefined(todo.id)) {
        const index = _.find(this.todosList, (todo1: Todo) => {
          return todo1.id === todo.id;
        });
        // проверяет на наличие значения id в инпуте
        // ищет схожее значение
        if (!_.isUndefined(index)) {
          index.title = todo.title;
        }
        // присвает новое значение title найденному элементу из массива.
      } else {
        const newElement = new Todo();
        newElement.id = this.getId();
        newElement.title = todo.title;
        this.todosList.push(newElement);
        // создает новый элемент и пушит его в массив
        // присваевая ему id и title
      }
    }
    this.activeItem = new Todo();
    // чистит переменную от значения
    this.editMode = false;
    // изменяет значение состояния кнопки
  }
  // добовляет элементы

  getId(): number {
    const maxId: Todo = _.maxBy(this.todosList, 'id');
    return _.isUndefined(maxId) ? 0 : maxId.id + 1;
  }
  // гинерит id
}
