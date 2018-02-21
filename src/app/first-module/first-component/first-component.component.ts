import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import * as _ from 'lodash';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  todosList: Todo[] = [];
  // Хранит значения массива
  activeItem: Todo = new Todo();
  // элемент с которым мы будем осуществлять действие
  constructor() {
    const todo = new Todo();
    // первый элемент списка
    todo.id = 1;
    // одно из задаваемых значений первому элементу
    todo.title = 'test';
    // одно из задаваемых значений первому элементу
    const todo1 = new Todo();
    // второй элемент в списке
    todo1.id = 2;
    // одно из задаваемых значений второму элементу
    todo1.title = 'test2';
    // одно из задаваемых значений второму элементу
    this.todosList.push(todo);
    // выводит информацию в компанент 1 элемента
    this.todosList.push(todo1);
    // выводит информацию в компанент 2 элемента
    // this.activeItem = this.todosList[0];
  }

  ngOnInit() {}
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
  }
  // принимает значение todo c типом Todo, присваевает это значение в activeItem и транслирует в инпут.
  onDeleteItem(todo: Todo) {
    _.remove(this.todosList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
    // принимает значение todo c типом Todo, ищет в массиве схожий компанент по id, при совпадении возращает элемент и удаляет его
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
      } else {
        const newElement = new Todo();
        newElement.id = this.getId();
        newElement.title = todo.title;
        this.todosList.push(newElement);
      }
    }
    this.activeItem = new Todo();
  }
  // принимает значение todo c типом Todo, проверяем на значение Undefined элемента todo, если он положителен то проверяем значение id на Undefined, создаем новую перевенную index и присваиваем ему значение полного элемента из списка массива, проверяем на Undefined это значение и потом задаем ей текущий title. обнуляет input. Если значение todo Undefined, то создается новый элемент типа Todo/
  // _.find- возвращает полный элемент из массива.
  getId(): number {
    const maxId: Todo = _.maxBy(this.todosList, 'id');
    return _.isUndefined(maxId) ? 0 : maxId.id + 1;
  }
  // Создает новый id новому компоненту, по типу нахождения крайнего в массиве и добовление единицы к значению последнего id, _.maxBy ищет максимальное значение id, работает только с цифрами.
}
