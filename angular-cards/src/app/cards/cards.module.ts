import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';

import { CarouselComponent, BottomSheetComponent } from './carousel/carousel.component';
import { FilterTagsComponent } from './filter-tags/filter-tags.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NewVlComponent } from './new-vl/new-vl.component';
import { FormComponent } from '../cards/form/form.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { LectureOverviewComponent } from './lecture-overview/lecture-overview.component';
import { QuillModule } from 'ngx-quill';

//Pipes

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    BottomSheetComponent,
    CarouselComponent,
    FilterTagsComponent,
    NewVlComponent,
    CardActionsComponent,
    FormComponent,
    LectureOverviewComponent,
  ],
  imports: [CardsRoutingModule, SharedModule, NgbCarouselModule, QuillModule],
})
export class CardsModule {}
