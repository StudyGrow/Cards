import {
  Component,
  OnInit
} from '@angular/core';
import {
  CarouselControlService
} from '../../services/carousel-control.service';

@Component({
  selector: 'app-random-button',
  templateUrl: './random-button.component.html',
  styleUrls: ['./random-button.component.css']
})
export class RandomButtonComponent implements OnInit {
  activeCardIndex: number;
  numberOfCards: number;

  constructor(private cs: CarouselControlService) {}

  ngOnInit(): void {
    this.cs.getActiveSlide().subscribe(value => this.activeCardIndex = value);
    this.cs.getNumberOfCarouselItems().subscribe(value => this.numberOfCards = value);
  }

  showRandomCard() {

    var rand: number = this.activeCardIndex;
    console.log("active Slide:" + this.activeCardIndex);

    console.log("count:" + this.numberOfCards);
    var count = 0;
    while ((count < 5) && (rand == this.activeCardIndex)) //calculate a new random index
    {
      count++;
      rand = Math.floor(Math.random() * this.numberOfCards); //random Cardindex
    }
    console.log("rand:" + rand);

  }
}
