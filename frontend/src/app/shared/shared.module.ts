import { CommonModule, DatePipe, AsyncPipe } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatIconModule } from '@angular/material/icon';
import { DialogueComponent } from '../components/dialogue/dialogue.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';

import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatLegacyPaginatorIntl as MatPaginatorIntl, MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { getGermanPaginatorIntl } from '../profile/cards-overview/paginator.options';

import { MatDividerModule } from '@angular/material/divider';
import { GoogleChartsModule } from 'angular-google-charts';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { PaginatorI18n } from './i18n.paginator';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  declarations: [SafeHtmlPipe, DialogueComponent],
  providers: [
    DatePipe,
    AsyncPipe,
    {
      provide: MatPaginatorIntl,
      deps: [TranslateService],
      useFactory: (translateService: TranslateService) => new PaginatorI18n(translateService).getPaginatorIntl(),
    },
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
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    GoogleChartsModule,
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
    TranslateModule,
  ],
})
export class SharedModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
