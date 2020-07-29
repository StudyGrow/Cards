import { CommonModule, DatePipe, AsyncPipe } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  declarations: [SafeHtmlPipe],
  providers: [DatePipe, AsyncPipe],
  exports: [
    CommonModule,
    SafeHtmlPipe,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
