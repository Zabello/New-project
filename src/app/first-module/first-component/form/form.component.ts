import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModelsModModule } from './../models-mod/models-mod.module';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  task: any;
  tasks: Array<ModelsModModule>;
  constructor() {}
  @Output()
  addTask: EventEmitter<FormComponent> = new EventEmitter<FormComponent>();
  onAddTask(newTask: { action: string }): void {
    const action = new ModelsModModule(null, newTask.action);

    this.addTask.emit(action);
    console.log('add task method', action);
  }
  ngOnInit() {}
}
