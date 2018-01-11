import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import { LoginComponent } from './login.component';
@NgModule({
  //导入的模块
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
