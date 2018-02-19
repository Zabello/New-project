import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstModuleModule } from './first-module/first-module.module';
import { TodoEditComponent } from './first-module/todo-edit/todo-edit.component';
import { TodosListComponent } from './first-module/todos-list/todos-list.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FirstModuleModule,
    TodoEditComponent,
    TodosListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
