import { Component, OnInit } from '@angular/core';
import{CarouselControlService} from '../../services/carousel-control.service';
import * as $ from 'jquery';
import 'jqueryui';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  activeSlide:number = 0;
  constructor(private cs:CarouselControlService) { }

  ngOnInit(): void {
    this.cs.getActiveSlide().subscribe((value=>this.activeSlide=value));
  }
  previousSlide(){
    ($('.carousel')as any).carousel('prev');
  }
  nextSlide(){
    ($('.carousel') as any).carousel('next');
  }
}
