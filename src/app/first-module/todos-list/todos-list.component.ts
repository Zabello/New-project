import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../first-component/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];
  // принимает входные данные todo типа Todo
  @Output() edit: EventEmitter<Todo> = new EventEmitter<Todo>();
  // передаем родительскому компоненту событие с свойсвом  типа EventEmitter значением todo типа Todo
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();
  // передаем родительскому компоненту событие с свойсвом  типа EventEmitter значением todo типа Todo
  constructor() {}

  ngOnInit() {}
  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }
  // обрабатываем и создаем событие
  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }
  // обрабатываем и создаем событие
}
