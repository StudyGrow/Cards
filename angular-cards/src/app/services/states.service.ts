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

  addComponentHidden:boolean;

  subj:Subject<boolean>= new Subject();

  constructor() {}

  getAddComponentHidden():Subject<boolean>{
    return this.subj;
  }

  setAddComponentHidden(value:boolean):void{
    this.subj.next(value);
  }
}
