import{Card} from "./Card"

export class CarouselInfo{
    constructor(public start?:number,public end?:number,public currentIndex?:number,public currentCard?:Card,public updateAt?:Date){}
}