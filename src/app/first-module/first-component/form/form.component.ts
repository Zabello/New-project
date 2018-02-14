import { Component, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';
import { Todo } from '../todo';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  valueFromInput = '';
  todos: Todo[] = [];
  editMode: Todo = undefined;
  changedInput = '';

  idForChange: number;

  onDelete(todo: Todo) {
    _.remove(this.todos, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
  }

  blaster() {
    if (!_.isEmpty(this.valueFromInput)) {
      if (!_.isUndefined(this.editMode)) {
        const index = _.find(this.todos, (todo1: Todo) => {
          return todo1.id === this.editMode.id;
        });
        if (!_.isUndefined(index)) {
          index.title = this.valueFromInput;
        }
        this.valueFromInput = '';
        this.editMode = undefined;
      } else {
        const newElement = new Todo();
        newElement.id = this.getId();
        newElement.title = this.valueFromInput;
        this.todos.push(newElement);
        this.valueFromInput = '';
      }
    }
  }
  getId(): number {
    const maxId: Todo = _.maxBy(this.todos, 'id');
    return _.isUndefined(maxId) ? 0 : maxId.id + 1;
  }
}
