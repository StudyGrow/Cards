import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Card, CardsData } from '../models/Card';

import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpConfig } from './config';
import { HttpClient } from '@angular/common/http';
import { Vorlesung } from '../models/Vorlesung';
import { GetLectureByAbbreviationWithCardsAndVotesGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private config = new HttpConfig(); // configuration for http communication with the server

  constructor(
    private http: HttpClient, // to make calls to the server
    private router: Router, // used to get the lecture abreviation from the route
    private getLectureByAbbreviationWithCardsAndVotesGQL: GetLectureByAbbreviationWithCardsAndVotesGQL
  ) {}

  // This loads all cards specific data which is needed on the route of a specific lecture
  fetchCardsData(): Observable<CardsData> {
    const abrv = this.router.url.split(/vorlesung\//)[1]; // get the lecture abreviation from the route
    const ss = this.getLectureByAbbreviationWithCardsAndVotesGQL.watch({ abrv: abrv }).valueChanges.pipe(
      map((res) => {
        return {
          lecture: {
            _id: res.data.getLecture._id,
            abrv: res.data.getLecture.abrv,
            name: res.data.getLecture.name,
            tagList: res.data.getLecture.tagList,
            totalCards: res.data.getLecture.totalCards,
          },
          cards: res.data.getLecture.cards,
          uid: null,
          votes: res.data.getLecture.votes,
        } as CardsData;
      })
    );

    return ss;
  }

  updateCard(card: Card): Observable<Card> {
    // send update to server using http service
    return this.http
      .put<Card>(
        this.config.urlBase + 'cards/update',
        { card },
        {
          headers: this.config.headers,
          observe: 'response',
        }
      )
      .pipe(map((res) => res.body));
  }

  addCard(card: Card): Observable<Card> {
    // send new card to server using http service
    return this.http
      .post<Card>(
        this.config.urlBase + 'cards/new',
        { card },
        {
          headers: this.config.headers,
          observe: 'response',
        }
      )
      .pipe(
        //  tap((res) => console.log(res)),
        map((res) => res.body)
      );
  }

  reportCard(card: Card, lecutre: Vorlesung): Observable<Card> {
    // send new card to server using http service
    return this.http
      .post<string>(
        this.config.urlBase + 'cards/report',
        { resourceId: card._id, lectureId: lecutre._id },
        {
          headers: this.config.headers,
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => console.log(res)),
        map((res) => {
          if (res.body === card._id) return card;
          throw new Error('Card not matching');
        })
      );
  }
}
