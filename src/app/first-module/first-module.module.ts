import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormComponent } from './first-component/form/form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FirstComponentComponent, FormComponent],
  providers: [],
  exports: [FirstComponentComponent]
})
export class FirstModuleModule {}
