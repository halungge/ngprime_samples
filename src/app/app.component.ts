import { Component, OnInit } from '@angular/core';
import {TimeRange} from './time.model';
import {MyService} from './child/my-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[MyService]
})
export class AppComponent {
  title = 'app';
  date: Date;
  children = ["Franz", "Lisa", "Alice"]
  presents = ["buch", "Ball", "Farbstift"]
  ind = 0;
  history:string[] = [];
  constructor(private myService:MyService){
    myService.parents.subscribe(val =>{
      this.history.push(val)
    })
  }

ngOnInit(){
  this.date = new Date();
}
send(){

  this.myService.present(this.presents[this.ind++])
  if(this.ind > this.presents.length){
    this.ind = 0;
  }

}
}
