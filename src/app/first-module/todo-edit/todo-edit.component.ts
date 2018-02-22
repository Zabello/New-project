import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../first-component/todo';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  // принимает входные данные todo и создает новый параметр с свойствами Todo ВОПРОС: Уточнить для чего = new Todo().
  @Output() add: EventEmitter<Todo> = new EventEmitter<Todo>();
  // передаем родительскому компоненту событие с свойсвом  типа EventEmitter значением todo типа Todo
  @Output() close: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}
  onAdd() {
    if (!_.isEmpty(this.todo)) {
      this.add.emit(this.todo);
    }
  }
  // обрабатываем и создаем событие перпедавая значение todo в главный компанент
  onClose() {
    this.close.emit(this.todo);
  }
}
