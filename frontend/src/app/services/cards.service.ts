import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Card, CardsData } from '../models/Card';

import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpConfig } from './config';
import { HttpClient } from '@angular/common/http';
import { Vorlesung } from '../models/Vorlesung';
import { GetLectureByAbbreviationWithCardsAndVotesGQL } from 'src/generated/graphql';
import { AddCardGQL } from 'src/generated/graphql';
import { UpdateCardGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private config = new HttpConfig(); // configuration for http communication with the server

  constructor(
    private http: HttpClient, // to make calls to the server
    private router: Router, // used to get the lecture abreviation from the route
    private getLectureByAbbreviationWithCardsAndVotesGQL: GetLectureByAbbreviationWithCardsAndVotesGQL,
    private addCardGQL: AddCardGQL,
    private updateCardGQL: UpdateCardGQL
  ) {}

  // This loads all cards specific data which is needed on the route of a specific lecture
  fetchCardsData(): Observable<CardsData> {
    const abrv = this.router.url.split(/vorlesung\//)[1]; // get the lecture abreviation from the route
    return this.getLectureByAbbreviationWithCardsAndVotesGQL.watch({ abrv: abrv }).valueChanges.pipe(
      map((res) => {
        return {
          lecture: {
            _id: res.data.lecture.id,
            abrv: res.data.lecture.abrv,
            name: res.data.lecture.name,
            tagList: res.data.lecture.tagList,
            totalCards: res.data.lecture.totalCards,
          },
          cards: res.data.lecture.cards,
          uid: null,
          // votes: res.data.lecture,
        } as CardsData;
      })
    );
  }

  updateCard(card: Card): Observable<Card> {
    // send update to server using http service

    return this.updateCardGQL
      .mutate({
        id: card._id,
        thema: card.thema,
        content: card.content,
        latex: card.latex,
        tags: card.tags,
      })
      .pipe(
        map((res) => {
          return res.data.updateCard;
        })
      );
  }

  addCard(card: Card): Observable<Card> {
    // send new card to server using http service
    return this.addCardGQL
      .mutate({
        lectureAbbreviation: card.lectureAbbreviation,
        thema: card.thema,
        content: card.content,
        latex: card.latex,
        tags: card.tags,
      })
      .pipe(map((res) => res.data.addCard));
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
        map((res) => {
          if (res.body === card._id) return card;
          throw new Error('Card not matching');
        })
      );
  }
}
