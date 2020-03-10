//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { SearchSuggestionsComponent } from "./components/search-suggestions/search-suggestions.component";
import { ModalComponent } from "./components/modal/modal.component";
import { HeaderContentComponent } from "./components/header-content/header-content.component";
import { RandomButtonComponent } from "./components/random-button/random-button.component";
import { EditButtonComponent } from "./components/edit-button/edit-button.component";
import { CancelButtonComponent } from "./components/cancel-button/cancel-button.component";
import { ToggleAddViewButtonComponent } from "./components/toggle-add-view-button/toggle-add-view-button.component";
import { AddCardFormComponent } from "./components/add-card-form/add-card-form.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { AddCardButtonComponent } from "./components/add-card-button/add-card-button.component";
import { UpdateCardButtonComponent } from "./components/update-card-button/update-card-button.component";
import { CardComponent } from "./components/card/card.component";
import { AddLectureFormComponent } from "./components/add-lecture-form/add-lecture-form.component";
import { LecturesComponent } from "./components/lectures/lectures.component";
//Services
import { StatesService } from "./services/states.service";
import { CardsService } from "./services/cards.service";
import { CarouselControlService } from "./services/carousel-control.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    SearchSuggestionsComponent,
    ModalComponent,
    HeaderContentComponent,
    RandomButtonComponent,
    EditButtonComponent,
    CancelButtonComponent,
    ToggleAddViewButtonComponent,
    AddCardFormComponent,
    CarouselComponent,
    AddCardButtonComponent,
    UpdateCardButtonComponent,
    CardComponent,
    AddLectureFormComponent,
    LecturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [StatesService, CardsService, CarouselControlService],
  bootstrap: [AppComponent]
})
export class AppModule {}
