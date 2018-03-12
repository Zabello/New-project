import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Todo } from '../first-component/todo';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnChanges {
  @Input() todo: Todo = new Todo();
  // принимает значение пременной из Input
  activeItem: Todo = new Todo();
  // для ngOnChanges:

  @Output() add: EventEmitter<Todo> = new EventEmitter<Todo>();
  // отправляет событие в главный компанент
  @Output() close: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() clear: EventEmitter<Todo> = new EventEmitter<Todo>();
  // @Output() cancel: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {
    // this.activeItem = _.clone(this.todo); добавить ngOnChanges:
  }
  ngOnChanges(changes: SimpleChanges) {
    this.activeItem = _.clone(this.todo);
  }
  offAdd() {}
  onAdd() {
    if (!_.isEmpty(this.todo)) {
      this.add.emit(this.todo);
    }
    // создает событие и проверяет его на значение
  }
  onClear() {
    if (!_.isEmpty(this.todo)) {
      this.clear.emit(this.todo);
    }
    // создает событие и проверяет его на значение
  }
  onCancel() {
    // this.cancel.emit(this.todo);
    this.todo.title = this.activeItem.title;
  }
  // создает событие
  onClose() {
    this.close.emit(this.todo);
  }
  // создает событие
}
