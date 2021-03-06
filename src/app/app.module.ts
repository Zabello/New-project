import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstModuleModule } from './first-module/first-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, FirstModuleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
