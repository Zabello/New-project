import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormComponent } from './first-component/form/form.component';
@NgModule({
  imports: [
    CommonModule,
    NgModule
  ],
  declarations: [FirstComponentComponent, FormComponent],
  providers: [],
  exports: [FirstComponentComponent]
})
export class FirstModuleModule { }
