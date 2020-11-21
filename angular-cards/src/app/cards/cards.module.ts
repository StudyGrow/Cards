import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CardsRoutingModule } from "./cards-routing.module";
import { CardsComponent } from "./cards.component";
import { CardComponent } from "./card/card.component";

import { CarouselComponent } from "./carousel/carousel.component";
import { FilterTagsComponent } from "./filter-tags/filter-tags.component";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NewVlComponent } from "./new-vl/new-vl.component";
import { FormComponent } from "../cards/form/form.component";
import { VoteComponent } from "./vote/vote.component";

//Pipes

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    CarouselComponent,
    FilterTagsComponent,
    NewVlComponent,
    VoteComponent,
    FormComponent,
  ],
  imports: [CardsRoutingModule, SharedModule, NgbCarouselModule],
})
export class CardsModule {}
