import { Injectable } from "@angular/core";
import { NotificationsService } from "./notifications.service";
import { HttpClient } from "@angular/common/http";
import { Vote } from "../models/Vote";
import { HttpConfig } from "./config";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class VotesService {
  private config = new HttpConfig(); //configuration for http communication with the server
  private votes$ = new BehaviorSubject<Vote[]>([]);

  constructor(
    private notifications: NotificationsService, //display errors to user
    private http: HttpClient, //to make calls to the server)
    private router: Router
  ) {}

  //called once by the cardsservice every time the route changes to a new lecture
  fetchVotes(abrv: string) {
    this.http
      .get<Vote[]>(this.config.urlBase + "cards/votes?abrv=" + abrv, {
        observe: "response",
      })
      .subscribe(
        (response) => {
          if (response.body) {
            this.votes$.next(response.body);
            console.log(response.body);
          } else {
            console.log("got empy response");
          }
        },
        (error) => {
          this.notifications.handleErrors(error);
        }
      );
  }

  //used for vote component to load the initial value of the respective vote
  loadInitialVote(cardId: string): Observable<Vote> {
    return this.votes$.pipe(
      map((votes) => votes.filter((vote) => vote.cardId == cardId)[0]) //get the vote which matches the id
    );
  }

  castVote(cardId: string, vote: number) {
    if (cardId) {
      this.http.post<Vote>(
        this.config.urlBase + "cards/vote",
        { value: vote, id: cardId },
        {
          headers: this.config.headers,
          observe: "response",
        }
      );
    }
  }
}
