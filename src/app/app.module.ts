import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Child} from './child/child.component';
import {MyService} from './child/my-service';


import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent, Child
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,

    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
