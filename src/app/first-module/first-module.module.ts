import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormComponent } from './first-component/form/form.component';
import { FormsModule } from '@angular/forms';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FirstComponentComponent, FormComponent, TodosListComponent, TodoEditComponent],
  providers: [],
  exports: [FirstComponentComponent]
})
export class FirstModuleModule {}
