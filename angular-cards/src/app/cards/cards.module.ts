import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CardsRoutingModule } from "./cards-routing.module";
import { CardsComponent } from "./cards.component";
import { CardComponent } from "./card/card.component";
import { AddCardFormComponent } from "./add-card-form/add-card-form.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FilterTagsComponent } from "./filter-tags/filter-tags.component";

import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { NewVlComponent } from "./new-vl/new-vl.component";
import { FormComponent } from "../cards/form/form.component";

//Pipes

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    AddCardFormComponent,
    CarouselComponent,
    FilterTagsComponent,
    NewVlComponent,
    FormComponent,
  ],
  imports: [CardsRoutingModule, SharedModule, CarouselModule, WavesModule],
})
export class CardsModule {}
