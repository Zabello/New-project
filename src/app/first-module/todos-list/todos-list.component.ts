import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../first-component/todo';
import * as _ from 'lodash';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];
  // принимает значение пременной из Массива
  @Input() currentEditItem: Todo = new Todo();
  // принимает значение пременной из activeItem
  @Output() edit: EventEmitter<Todo> = new EventEmitter<Todo>();
  // отправляет событие в главный компанент
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}
  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }
  // создает событие
  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }
  // создает событие
}
