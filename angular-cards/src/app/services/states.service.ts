//This service is made to manage states across components

import {
  Injectable
} from '@angular/core';
import {
  Subject
} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StatesService {

  addComponentHidden:Subject<boolean>= new Subject();

  constructor() {}

  getAddComponentHidden():Subject<boolean>{
    return this.addComponentHidden;
  }

  setAddComponentHidden(value:boolean):void{
    this.addComponentHidden.next(value);
  }
}
