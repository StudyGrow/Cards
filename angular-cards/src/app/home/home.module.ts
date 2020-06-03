import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { AddLectureFormComponent } from "./add-lecture-form/add-lecture-form.component";
import { LecturesComponent } from "./lectures/lectures.component";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent, AddLectureFormComponent, LecturesComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
