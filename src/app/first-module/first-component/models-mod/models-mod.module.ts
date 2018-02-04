import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class ModelsModModule {
  constructor(public id: number, public action: string) {
    this.action = action;
  }
}
