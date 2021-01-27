import { CommonModule, DatePipe, AsyncPipe } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DialogueComponent } from '../components/dialogue/dialogue.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';

import { MatSelectModule } from '@angular/material/select';

import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { getGermanPaginatorIntl } from '../profile/cards-overview/paginator.options';

import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  imports: [],
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
    MatSnackBarModule,
    MatSelectModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
})
export class SharedModule {}
