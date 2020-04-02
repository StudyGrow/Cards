import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { CardsPageComponent } from "./routes/cards-page/cards-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "vorlesung/:abrv", component: CardsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
