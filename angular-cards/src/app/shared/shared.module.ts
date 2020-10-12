import { CommonModule, DatePipe, AsyncPipe } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from "@angular/material/list";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { MatRippleModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { DialogueComponent } from "../components/dialogue/dialogue.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from "@angular/material/paginator";
import { getGermanPaginatorIntl } from "../profile/cards-overview/paginator.options";
@NgModule({
  imports: [
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  declarations: [SafeHtmlPipe, DialogueComponent],
  providers: [
    DatePipe,
    AsyncPipe,
    { provide: MatPaginatorIntl, useValue: getGermanPaginatorIntl() },
  ],
  exports: [
    CommonModule,
    SafeHtmlPipe,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatRippleModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
})
export class SharedModule {}
