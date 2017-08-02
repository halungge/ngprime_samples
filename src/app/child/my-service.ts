import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class MyService{
  // Observable string sources
  private newChildSource = new Subject<string>();
  private newParentSource = new Subject<string>();

  get children(){
    return this.newChildSource.asObservable();
  }
  get parents(){
    return this.newParentSource.asObservable();
  }

present(name: string) {
    this.newChildSource.next(name);
}

thankYou(name: string) {
  this.newParentSource.next(name);
}
}
