import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CardsRoutingModule } from "./cards-routing.module";
import { CardsComponent } from "./cards.component";
import { CardComponent } from "./card/card.component";
import { AddCardFormComponent } from "./add-card-form/add-card-form.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { LectureHeaderComponent } from "./lecture-header/lecture-header.component";
import { UpdateCardFormComponent } from "./update-card-form/update-card-form.component";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { NewVlComponent } from "./new-vl/new-vl.component";

//Pipes

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    AddCardFormComponent,
    CarouselComponent,
    LectureHeaderComponent,
    UpdateCardFormComponent,
    NewVlComponent,
  ],
  imports: [CardsRoutingModule, SharedModule, CarouselModule, WavesModule],
})
export class CardsModule {}
