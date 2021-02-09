import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/models/Card';
import { CardsSorted, CurrentLecture, Theme } from 'src/app/store/selector';

@Component({
  selector: 'app-lecture-overview',
  templateUrl: './lecture-overview.component.html',
  styleUrls: ['./lecture-overview.component.scss'],
})
export class LectureOverviewComponent implements OnInit {
  textStyle = { color: '#FFF' };
  static groupBy = function (xs: { date: string; id: string }[], key: string) {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  chartOptions = {
    backgroundColor: { fill: 'transparent' },
    titleTextStyle: this.textStyle,
    vAxis: {
      textStyle: this.textStyle,
      titleTextStyle: this.textStyle,
      gridlines: { color: '#787878' },
    },
    hAxis: {
      textStyle: this.textStyle,
      titleTextStyle: this.textStyle,
    },
    legend: {
      textStyle: this.textStyle,
    },
  };
  cards$ = this.store.select(CardsSorted);
  lecture$ = this.store.select(CurrentLecture);
  activities$ = this.cards$.pipe(
    map((
      cards: Card[] //Group cards by date
    ) =>
      cards
        ? LectureOverviewComponent.groupBy(
            cards?.map((card: Card) => ({
              date: new Date(card.date).toLocaleDateString(),
              id: card._id,
            })),
            'date'
          )
        : []
    ),
    map((obj: Map<string, string[]>) =>
      Object.entries(obj)
        .map((array: [string, string[]]) => [array[0], array[1].length])
        .filter((array) => array[0] != 'Invalid Date')
    )
  );
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(Theme).subscribe((theme) => {
      console.log(theme);
      if (theme == 'dark-theme') {
        this.textStyle.color = '#fff';
      } else {
        this.textStyle.color = '#000';
      }
    });
  }
}
