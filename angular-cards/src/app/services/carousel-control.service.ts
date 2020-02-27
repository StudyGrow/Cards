import {
  Injectable
} from '@angular/core';
import {
  Subject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselControlService {

  activeSlide:Subject<number>= new Subject();
  numberOfCarouselItems:Subject<number>= new Subject();

  constructor() {
  }

  getNumberOfCarouselItems():Subject<number>{
    return this.numberOfCarouselItems;
  }
  setNumberOfCarouselItems(value:number):void{
    this.numberOfCarouselItems.next(value);
  }

  

  getActiveSlide(): Subject<number> {
    return this.activeSlide;
  }
  setActiveSlide(value:number):void{
    this.activeSlide.next(value);
  }

  
}
