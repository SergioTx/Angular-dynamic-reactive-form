import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubFormOneComponent } from './sub-form-one/sub-form-one.component';
import { SubFormTwoComponent } from './sub-form-two/sub-form-two.component';

@NgModule({
  declarations: [AppComponent, SubFormOneComponent, SubFormTwoComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
