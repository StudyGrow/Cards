import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { fadeInUpAnimation } from 'angular-animations';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Card } from 'src/app/models/Card';
import { ThemesService } from 'src/app/services/themes.service';
import { SORTED_CARDS, SELECTED_LECTURE } from 'src/app/store/selector';
import { chartOptions } from './chart.options';

@Component({
  selector: 'app-lecture-overview',
  templateUrl: './lecture-overview.component.html',
  styleUrls: ['./lecture-overview.component.scss'],
  animations: [fadeInUpAnimation({ duration: 500 })],
})
export class LectureOverviewComponent implements OnInit {

  formatter_medium; // holds the formatter for the date with format type medium

  initialized = false;
  textStyle = { color: '#FFF' };
  chartOptions = {};
  cards$ = this.store.select(SORTED_CARDS);
  lecture$ = this.store.select(SELECTED_LECTURE);
  activities$ = this.cards$.pipe(
    // delay(300), //wait for tab change transition to complete
    map((
      cards // transform cards array into array containing objects with only date attribute
    ) =>
      cards?.map((card: Card) => ({
        date: new Date(card.date).toLocaleDateString(),
      }))
    ),
    map((
      dates: { date: string }[] // Group array by date
    ) => (dates ? LectureOverviewComponent.groupBy(dates, 'date') : [])),
    map(
      (
        obj: Map<string, { date: string }[]> // transform map into data table for google charts
      ) => Object.entries(obj).map((array: [string, string[]]) => [new Date(array[0]), array[1].length])
      // .filter((array) => array[0] != 'Invalid Date') // filter out invalid dates

    )
  );
  contributors$ = this.cards$.pipe(
    map((
      cards // transform cards array into array containing objects with only author info
    ) =>
      cards?.map((card: Card) => ({
        authorName: card.authorName,
        authorId: card.authorId,
      }))
    ),
    map((
      authors: { authorName: string; authorId: string }[] // Group array by date
    ) => (authors ? LectureOverviewComponent.groupBy(authors, 'authorId') : [])), // grouping by authorId but authorName should work too as they are distinct
    map(
      (
        map: Map<string, { authorName: string; authorId: string }[]> // transform map into data table for google charts
      ) =>
        Object.entries(map)
          .map(([, authors]: [string, { authorName: string; authorId: string }[]]) => [
            authors[0].authorName,
            authors.length,
          ])
          .sort(([, count]: [string, number], [, count2]: [string, number]) => count2 - count) // sort by number of cards submitted by author
          .filter((array) => array[0] != undefined) // filter out invalid authors
          .slice(0, 10) // top 10 contributors, might be less
    )
  );
  formatters = []; // formatters are used to format js dates into human readable format

  constructor(private store: Store, private themeManager: ThemesService, private scriptLoader: ScriptLoaderService) {}
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    let sub = this.scriptLoader.loadChartPackages().subscribe(() => {
      this.formatter_medium = new google.visualization.DateFormat({
        formatType: 'medium',
      });
      this.formatters.push({ formatter: this.formatter_medium, colIndex: 0 });
    });
    this.subscriptions.push(sub);
    sub = combineLatest([
      this.themeManager.currentTheme.pipe(distinctUntilChanged()),
      this.contributors$,
      this.activities$,
    ]).subscribe(([theme]) => {
      if (theme == 'dark-theme') {
        this.textStyle.color = '#fff';
      } else {
        this.textStyle.color = '#000';
      }
      this.chartOptions = chartOptions(this.textStyle);
      this.initialized = false;
      setTimeout(() => {
        this.initialized = true;
      }, 50);
    });

    this.subscriptions.push(sub);
  }

  /**
   * Groups objects by a certain key
   * @param xs
   * @param key
   * @returns The values of the map contain the grouped arrays. The keys are the key that all array entries share
   */
  static groupBy<T>(xs: T[], key: string): Map<string, T[]> {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, new Map<string, T[]>());
  }
}
