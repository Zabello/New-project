import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstComponentComponent],
  providers: [],
  exports: [FirstComponentComponent]
})
export class FirstModuleModule { }
