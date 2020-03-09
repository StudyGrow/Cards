import {
  Injectable
} from '@angular/core';
import {
  Subject, Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselControlService {

  activeSlide:Observable<number>= new Observable();
  numberOfCarouselItems:Observable<number>= new Observable();

  constructor() {
  }

  getNumberOfCarouselItems():Observable<number>{
    return this.numberOfCarouselItems;
  }
  setNumberOfCarouselItems(value:number):void{
    this.numberOfCarouselItems.next(value);
  }

  

  getActiveSlide(): Observable<number> {
    return this.activeSlide;
  }
  setActiveSlide(value:number):void{
    this.activeSlide.next(value);
  }

  
}
