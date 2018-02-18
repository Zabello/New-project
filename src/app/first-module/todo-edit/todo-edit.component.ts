import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../first-component/todo';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Output() add: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}
  onAdd() {
    this.add.emit(this.todo);
  }
}
