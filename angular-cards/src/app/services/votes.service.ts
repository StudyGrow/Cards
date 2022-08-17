import { Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { HttpClient } from '@angular/common/http';
import { Vote } from '../models/Vote';
import { HttpConfig } from './config';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CastVoteGQL, GetLectureByAbbreviationWithCardsAndVotesGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class VotesService {
  private config = new HttpConfig(); //configuration for http communication with the server
  private votes$ = new BehaviorSubject<Vote[]>([]);

  constructor(
    private notifications: NotificationsService, //display errors to user
    private http: HttpClient, //to make calls to the server)
    private router: Router,
    private getLectureByAbbreviationWithCardsAndVotesGQL: GetLectureByAbbreviationWithCardsAndVotesGQL,
    private castVoteGQL: CastVoteGQL
  ) {}

  /**
   * Function,which loads the votes made by the user
   * called once by the cardsservice every time the route changes to a new lecture
   * @param abrv abreviation of the lecture; identifies the lecture
   */
  fetchVotes(abrv?: string): Observable<Vote[]> {
    if (!abrv) {
      abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
    }
    return this.getLectureByAbbreviationWithCardsAndVotesGQL.watch({ abrv: abrv }).valueChanges.pipe(
      timeout(3000),
      map((res) => {
        return res.data.getLecture.votes as Vote[];
      })
    );
  }

  //used for vote component to load the initial value of the respective vote
  loadInitialVote(cardId: string): Observable<Vote> {
    return this.votes$.pipe(
      map((votes) => votes.filter((vote) => vote.cardId == cardId)[0]) //get the vote which matches the id
    );
  }

  castVote(vote: Vote): Observable<Vote> {
    return this.castVoteGQL.mutate({ cardId: vote.cardId, value: vote.value }).pipe(
      timeout(3000),
      map((res) => {
        return res.data.castVote as Vote;
      })
    );
  }
}
