import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { user, UserCards } from 'src/app/store/selector';
import { ThemesService } from 'src/app/services/themes.service';
import { chartOptions } from './chart.options';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  user$ = this.store.select(user);
  cardCount$ = this.store.select(UserCards).pipe(map((cards) => cards?.length));

  chartOptions;
  init: boolean;
  data$ = this.store.select(UserCards).pipe(
    map((cards) =>
      cards?.map((card: any) => ({
        _id: card._id,
        vorlesung: card.abrv || card.vorlesung,
      }))
    ),
    map((cards) => OverviewComponent.groupBy(cards || [], 'vorlesung')),
    map((
      map: Map<string, { _id: string; vorlesung: string }[]> //transform map into data table for google charts
    ) =>
      Object.entries(map)
        .map(([vorlesung, array]: [string, { _id: string; vorlesung: string }[]]) => [vorlesung, array.length])
        .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
    ),
    map((data) => data.slice(0, 5).concat([['Others', data.slice(5, data.length).length]]))
  );
  constructor(private store: Store, private theme: ThemesService) {}

  ngOnInit(): void {
    this.user$ = this.store.select(user);
    this.store.subscribe((user) => console.log(user));
    this.theme.currentTheme.pipe(distinctUntilChanged()).subscribe((theme) => {
      const textStyle = { color: '#000' };
      if (theme === 'dark-theme') {
        textStyle.color = '#fff';
      }
      this.chartOptions = chartOptions(textStyle);
      this.init = false;
      setTimeout(() => {
        this.init = true;
      });
    });
  }

  /**
   * Groups objects by a certain key
   * @param xs
   * @param key
   * @returns The values of the map contain the grouped arrays. The keys are the key that all array entries share
   */
  static groupBy<T>(xs: T[], key: string): Map<string, T[]> {
    return xs?.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, new Map<string, T[]>());
  }
}
