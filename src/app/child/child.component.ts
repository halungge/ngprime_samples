import { Component , Input} from '@angular/core';
import {MyService} from './my-service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-child',
  template:'<p>{{name}} has got present {{present}}</p> <button (click) ="reply()" [disabled]="!gotPresent||replied">thanks</button>',
})

export class Child {
  @Input() name:string;
  present:string;
  gotPresent = false;
  replied = false;
  subscription:Subscription;
  constructor(private myService:MyService){
    this.subscription = myService.children.subscribe(
      val => {
        this.gotPresent = true;
        this.present= val;
        this.replied = false;

      }
    );


  }
  reply(){
    this.replied = true;
    if(this.present != null) {

    this.myService.thankYou(this.name + "says thank you for " +this.present)
  }else{
    this.myService.thankYou("nope")
  }

  }


}
