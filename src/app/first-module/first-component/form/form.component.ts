import { Component, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  valueFromInput = '';
  todos = [];
  editMode = '';
  changedInput = '';

  onClick() {
    if (!_.isEmpty(this.valueFromInput)) {
      this.todos.push(this.valueFromInput);
    }
  }

  onDelete(todo: string) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
  onSave(todo: string) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1, this.changedInput);
    this.editMode = '';
  }
  blaster() {
    if (!_.isEmpty(this.valueFromInput)) {
      if (!_.isEmpty(this.editMode)) {
        const index = this.todos.indexOf(this.editMode);
        this.todos.splice(index, 1, this.valueFromInput);
        this.valueFromInput = '';
        this.editMode = '';
      } else {
        this.todos.push(this.valueFromInput);
      }
    }
  }
}
