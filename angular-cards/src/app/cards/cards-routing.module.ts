import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { CardsComponent } from "./cards.component";
import { NewVlComponent } from "./new-vl/new-vl.component";

const routes: Routes = [
  { path: "neu", component: NewVlComponent },
  { path: ":abrv", component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {}
