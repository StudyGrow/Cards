import { CommonModule, DatePipe, AsyncPipe } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SafeHtmlPipe } from "./safe-html.pipe";
@NgModule({
  imports: [MatExpansionModule, MatDialogModule, MatTooltipModule],
  declarations: [SafeHtmlPipe],
  providers: [DatePipe, AsyncPipe],
  exports: [
    CommonModule,
    SafeHtmlPipe,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
