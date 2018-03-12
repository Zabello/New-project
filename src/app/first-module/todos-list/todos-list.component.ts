import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Todo } from '../first-component/todo';
import * as _ from 'lodash';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit, OnChanges {
  @Input() todos: Todo[];
  @Input() todo: Todo = new Todo();
  currentEditItem: Todo = new Todo();
  // принимает значение пременной из Массива
  // @Input() currentEditItem: Todo = new Todo();
  // принимает значение пременной из activeItem
  @Output() edit: EventEmitter<Todo> = new EventEmitter<Todo>();
  // отправляет событие в главный компанент
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.currentEditItem = _.clone(this.todo);
  }
  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }
  // создает событие
  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }
  // создает событие
}
