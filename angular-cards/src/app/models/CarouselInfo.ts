import { Card } from './Card';

export class CarouselInfo {
  constructor(
    public start?: number,
    public end?: number,
    public currentIndex?: number,
    public absoluteIndex?: number, // absolute index of the current card in the carousel
    public currentCard?: Card,
    public allCardsSorted?: Card[],
    public allCardsSortedAndFiltered?: Card[],
    public updateAt?: Date
  ) {}
}
