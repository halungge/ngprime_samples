import { Component, OnInit } from '@angular/core';
import {TimeRange} from './time.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  date: Date;

ngOnInit(){
  this.date = new Date();
}
}
