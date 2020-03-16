//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
//Components
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { SearchSuggestionsComponent } from "./components/search-suggestions/search-suggestions.component";
import { ModalComponent } from "./components/modal/modal.component";
import { HeaderContentComponent } from "./components/header-content/header-content.component";

import { AddCardFormComponent } from "./components/add-card-form/add-card-form.component";
import { CarouselComponent } from "./components/carousel/carousel.component";

import { CardComponent } from "./components/card/card.component";
import { AddLectureFormComponent } from "./components/add-lecture-form/add-lecture-form.component";
import { LecturesComponent } from "./components/lectures/lectures.component";
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { CardsPageComponent } from "./routes/cards-page/cards-page.component";
//Services
import { StatesService } from "./services/states.service";
import { CardsService } from "./services/cards.service";
import { CarouselControlService } from "./services/carousel-control.service";
import { HttpService } from "./services/http-service.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    SearchSuggestionsComponent,
    ModalComponent,
    HeaderContentComponent,
    AddCardFormComponent,
    CarouselComponent,
    CardComponent,
    AddLectureFormComponent,
    LecturesComponent,
    HomePageComponent,
    CardsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [StatesService, HttpService, CarouselControlService],
  bootstrap: [AppComponent]
})
export class AppModule {}
