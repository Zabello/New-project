import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormComponent } from './first-component/form/form.component';
import { FormsModule } from '@angular/forms';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoService } from './services/todo.service';
import { NewFeaturePipe } from './new-feature.pipe';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    FirstComponentComponent,
    FormComponent,
    TodosListComponent,
    TodoEditComponent,
    NewFeaturePipe
  ],
  providers: [TodoService],
  exports: [FirstComponentComponent]
})
export class FirstModuleModule {}
