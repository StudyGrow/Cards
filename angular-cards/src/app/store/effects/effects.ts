import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, combineLatest } from 'rxjs';
import { share, tap, withLatestFrom, filter, switchMap, take } from 'rxjs/operators';
import { catchError, map, mergeMap, exhaustMap } from 'rxjs/operators';
import * as CardActions from '../actions/CardActions';
import * as LectureActions from '../actions/LectureActions';
import { CardsService } from '../../services/cards.service';
import { LecturesService } from '../../services/lectures.service';
import { Store } from '@ngrx/store';
import {
  fetchUserData,
  fetchUserDataSuccess,
  updateUserData,
  updateUserDataSuccess,
  login,
  loginSuccess,
  auth,
  logout,
  authenticated,
  logoutSuccess,
  createAccount,
  googleCallback,
} from '../actions/UserActions';
import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { SuccessMessage } from 'src/app/models/Notification';
import { VotesService } from 'src/app/services/votes.service';

import { Card, CardsData } from 'src/app/models/Card';
import {
  changeSorting,
  fail,
  navigateToCard,
  resetFilter,
  showNewCard,
  showNewCardSuccess,
} from '../actions/StateActions';
import {
  SORTED_CARDS,
  SORTED_AND_FILTERED_CARDS,
  SHOWN_CARDS,
  AUTHORIZED,
  CURRENT_CARD,
  SELECTED_LECTURE,
} from '../selector';
import { addTagsToLecture } from '../actions/LectureActions';

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private cards: CardsService,
    private user: UserService,
    private votes: VotesService,
    private lectures: LecturesService,
    private store: Store,
    private router: Router,
    private notifications: NotificationsService
  ) {}

  /**
   * Loads cards data from the server
   */
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.fetchCards),
      tap(() => this.store.dispatch(CardActions.fetchVotes())), // fetch votes of user
      exhaustMap(() =>
        this.cards.fetchCardsData().pipe(
          map((data: CardsData) => CardActions.storeCardData({ data: data })),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share() // share is used for the effects so that components can subscribe to the effect without triggering it multiple times
    )
  );

  /**
   * Fetches votes that were made by the current user
   */
  fetchVotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.fetchVotes),
      withLatestFrom(this.store.select(AUTHORIZED)),
      filter(([, auth]) => auth), // make sure user is logged in before requesting data from server
      exhaustMap(
        // exhaustMap can be used whenever we are sure that the request is idempotent, as in the case with GET
        () => this.votes.fetchVotes().pipe(map((votes) => CardActions.storeVotes({ votes: votes })))
      ),
      share()
    )
  );

  /**
   * navigates to the lecture route and sets a new card to be displayed in the carousel
   */
  navigateToCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(navigateToCard),
      tap(({ card }) => {
        const url = `vorlesung/${card.abrv ? card.abrv : card['vorlesung']}`;
        if (!this.router.url.includes(url)) this.router.navigateByUrl(url); // change routes if we are not on cards route
      }),
      switchMap(({ card }) =>
        combineLatest([
          // emits if every inner observable emits at least one value
          of(card),
          this.store.select(SHOWN_CARDS).pipe(
            filter((cards) => cards !== undefined), // wait for cards to be loaded from the server
            take(1)
          ),
        ])
      ),
      map(([newCard]) => showNewCard({ card: newCard }))
    )
  );

  /**
   * This effect handles components requesting a card change to the carousel.
   * It is important to note that this function should not be called by the carousel itself in order to prevent loops
   */

  currentCardChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showNewCard),
      withLatestFrom(
        this.store.select(SORTED_AND_FILTERED_CARDS) // all cards sorted and filtered by tags which the user selected
      ),
      tap(([{ card }, filteredCards]) => {
        if (card && !filteredCards?.find((c) => c._id === card._id)) {
          // need to reset filter if new card is not in the filtered cards
          this.store.dispatch(resetFilter());
        }
      }),
      map(([{ card }]) => showNewCardSuccess({ card: card })),
      share()
    )
  );

  /**
   * Changes the vote on a card
   */
  changeVote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.changeVote),
      switchMap((action) =>
        this.votes.castVote(action.vote).pipe(
          map((vote) => {
            return CardActions.updateVoteChange({ vote: vote });
          })
        )
      ),
      share()
    )
  );

  // /**
  //  * Changes the vote on a card
  //  */
  // changeSorting$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(changeSorting),
  //     tap(() => this.store.dispatch(showNewCard({}))),
  //     share()
  //   )
  // );

  /**
   * Fetch lectures from the server
   */

  fetchLectures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.fetchLectures),
      exhaustMap(() =>
        this.lectures.getAllLectures().pipe(
          map((data) => {
            return LectureActions.fetchLecturesSuccess({ lectures: data });
          })
        )
      )
    )
  );

  addLecture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.addLercture),
      mergeMap((
        action // use merge map here as multiple changes could be made while the request has not terminated
      ) =>
        this.lectures.addLecture(action.lecture).pipe(
          map((res) => LectureActions.addLectureSuccess({ lecture: res })),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  addCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.addCard),
      exhaustMap((cardAction) =>
        this.cards.addCard(cardAction.card).pipe(
          tap((card) => {
            setTimeout(() => {
              this.store.dispatch(showNewCard({ card: card })); // go to last card
            }, 200);
            this.store.dispatch(addTagsToLecture({ tags: card.tags }));
          }),
          map((res) => CardActions.storeCard({ card: res })),

          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  updateCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.updateCard),
      switchMap((action) =>
        this.cards.updateCard(action.card).pipe(
          tap((card) => {
            this.store.dispatch(showNewCard({ card: card }));
            this.store.dispatch(addTagsToLecture({ tags: card.tags }));
          }),
          map((card) => CardActions.updateChangedCard({ card: card })),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  fetchUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUserData),
      exhaustMap(() =>
        this.user.getUserInfo().pipe(
          map((info) => fetchUserDataSuccess(info)),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  updateUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserData),
      switchMap((action) =>
        this.user.updateAccount(action).pipe(
          map((user) => updateUserDataSuccess(user)),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((user) =>
        this.user.login(user).pipe(
          tap((user) => {
            if (user) {
              this.router.navigateByUrl('/');
              this.notifications.addNotification(new SuccessMessage(`Willkommen ${user.username}`));
              this.store.dispatch(fetchUserData());
            }
          }),
          map((user) => loginSuccess(user)),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  googleCallback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(googleCallback),
      exhaustMap(({ callbackUrl }) =>
        this.user.googleCallbackLogin(callbackUrl).pipe(
          tap((user) => {
            if (user) {
              this.router.navigateByUrl('/');
              this.notifications.addNotification(new SuccessMessage(`Willkommen ${user.username}`));
              this.store.dispatch(fetchUserData());
            }
          }),
          map((user) => loginSuccess(user)),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      exhaustMap(() =>
        this.user.logoutServer().pipe(
          tap((success) => {
            this.router.navigateByUrl('/');
            if (success) this.notifications.addNotification(new SuccessMessage('Erfolgreich abgemeldet'));
          }),
          map(() => logoutSuccess()),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  registerAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAccount),
      exhaustMap((user) =>
        this.user.createAccount(user).pipe(
          map((user) => {
            return auth();
          }),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(auth),
      switchMap(() =>
        this.user.authentication().pipe(
          map((val) => {
            if (val) {
              this.store.dispatch(fetchUserData()); // get userData if authorization was sucessfull
            }
            return authenticated({ auth: val });
          }),

          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  report$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.reportCard),
      withLatestFrom(combineLatest([this.store.select(CURRENT_CARD), this.store.select(SELECTED_LECTURE)])),
      switchMap(([, [card, lecture]]) =>
        this.cards.reportCard(card, lecture).pipe(
          map((c) => CardActions.updateReportedCard({ card: c })),
          catchError((reason) => of(CardActions.httpFailure({ reason: reason })))
        )
      ),
      share()
    )
  );
}
