import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeInOnEnterAnimation, fadeInUpAnimation } from 'angular-animations';
import { delay, map } from 'rxjs/operators';
import { Card } from 'src/app/models/Card';
import { CardsSorted, CurrentLecture, Theme } from 'src/app/store/selector';
import { chartOptions } from './submission.chart';

@Component({
  selector: 'app-lecture-overview',
  templateUrl: './lecture-overview.component.html',
  styleUrls: ['./lecture-overview.component.scss'],
  animations: [fadeInUpAnimation({ duration: 500 })],
})
export class LectureOverviewComponent implements OnInit {
  textStyle = { color: '#FFF' };
  chartOptions = {};
  cards$ = this.store.select(CardsSorted);
  lecture$ = this.store.select(CurrentLecture);
  activities$ = this.cards$.pipe(
    // delay(300), //wait for tab change transition to complete
    map((
      cards //transform cards array into array containing objects with only date attribute
    ) =>
      cards?.map((card: Card) => ({
        date: new Date(card.date).toLocaleDateString(),
      }))
    ),
    map((
      dates: { date: string }[] //Group array by date
    ) => (dates ? LectureOverviewComponent.groupBy(dates, 'date') : [])),
    map(
      (
        obj: Map<string, { date: string }[]> //transform map into data table for google charts
      ) =>
        Object.entries(obj)
          .map((array: [string, string[]]) => [array[0], array[1].length])
          .filter((array) => array[0] != 'Invalid Date') //filter out invalid dates
    )
  );
  contributors$ = this.cards$.pipe(
    map((
      cards //transform cards array into array containing objects with only author info
    ) =>
      cards?.map((card: Card) => ({
        authorName: card.authorName,
        authorId: card.authorId,
      }))
    ),
    map((
      authors: { authorName: string; authorId: string }[] //Group array by date
    ) => (authors ? LectureOverviewComponent.groupBy(authors, 'authorId') : [])), //grouping by authorId but authorName should work too as they are distinct
    map(
      (
        map: Map<string, { authorName: string; authorId: string }[]> //transform map into data table for google charts
      ) =>
        Object.entries(map)
          .map(([id, authors]: [string, { authorName: string; authorId: string }[]]) => [
            authors[0].authorName,
            authors.length,
          ])
          .sort(([name, count]: [string, number], [name2, count2]: [string, number]) => count2 - count) //sort by number of cards submitted by author
          .filter((array) => array[0] != undefined) //filter out invalid authors
          .slice(0, 10) //top 10 contributors, might be less
    )
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(Theme).subscribe((theme) => {
      if (theme == 'dark-theme') {
        this.textStyle.color = '#fff';
      } else {
        this.textStyle.color = '#000';
      }
      this.chartOptions = chartOptions(this.textStyle.color);
    });
    this.contributors$.subscribe((con) => console.log(con));
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
