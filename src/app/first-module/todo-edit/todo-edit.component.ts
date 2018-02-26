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
  @Input() itemuparray: Todo = new Todo();
  @Output() add: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() close: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() clear: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() cancel: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() addlist: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}
  offAdd() {}
  onAdd() {
    if (!_.isEmpty(this.todo)) {
      this.add.emit(this.todo);
    }
  }
  onClear() {
    if (!_.isEmpty(this.todo)) {
      this.clear.emit(this.todo);
    }
  }
  onCancel() {
    this.cancel.emit(this.todo);
  }
  onClose() {
    this.close.emit(this.todo);
  }
  onAddlist(todo: Todo) {
    if (!_.isEmpty(this.todo)) {
      this.addlist.emit(this.todo);
    }
  }
}
