import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of, Observable, combineLatest } from 'rxjs';
import {
  share,
  tap,
  startWith,
  withLatestFrom,
  filter,
  shareReplay,
  switchMap,
  delay,
  skipUntil,
  skipWhile,
  delayWhen,
  take,
  debounceTime,
  takeLast,
} from 'rxjs/operators';

import { catchError, map, mergeMap, exhaustMap } from 'rxjs/operators';
import {
  LoadFailure,
  FetchCardsActions,
  AddCardActions,
  UpdateCardActions,
  fetchVotes,
  fetchVotesSuccess,
  changeVote,
  changeVoteSuccess,
} from '../actions/CardActions';
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
} from '../actions/UserActions';
import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { SuccessMessage } from 'src/app/models/Notification';
import { VotesService } from 'src/app/services/votes.service';

import { Card, CardsData } from 'src/app/models/Card';
import {
  adjustIndeces,
  fail,
  navigateToCard,
  resetFilter,
  setActiveCard,
  setActiveCardSuccess,
} from '../actions/StateActions';
import { CardsSorted, CardsSortedAndFiltered, DisplayedCards, authorized } from '../selector';

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
  @Effect()
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchCardsActions.fetchCards),
      tap(() => this.store.dispatch(fetchVotes())), //fetch votes of user
      exhaustMap(() =>
        this.cards.fetchCardsData().pipe(
          map((data: CardsData) => FetchCardsActions.LoadSuccess({ data: data })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share() //share is used for the effects so that components can subscribe to the effect without triggering it multiple times
    )
  );

  /**
   * Fetches votes that were made by the current user
   */
  @Effect()
  fetchVotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchVotes),
      withLatestFrom(this.store.select(authorized)),
      filter(([action, auth]) => auth), //make sure user is logged in before requesting data from server
      exhaustMap(
        //exhaustMap can be used whenever we are sure that the request is idempotent, as in the case with GET
        () => this.votes.fetchVotes().pipe(map((votes) => fetchVotesSuccess({ votes: votes })))
      ),
      share()
    )
  );

  /**
   * navigates to the lecture route and sets a new card to be displayed in the carousel
   */
  @Effect()
  navigateToCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(navigateToCard),
      tap(({ card }) => {
        let url = `vorlesung/${card.abrv ? card.abrv : card['vorlesung']}`;
        if (!this.router.url.includes(url)) this.router.navigateByUrl(url); //change routes if we are not on cards route
      }),

      switchMap(({ card }) =>
        combineLatest([
          //emits if every inner observable emits at least one value
          of(card),
          this.store.select(DisplayedCards).pipe(
            filter((cards) => cards !== undefined), //wait for cards to be loaded from the server
            take(1)
          ),
        ])
      ),

      map(([newCard, cards]) => setActiveCard({ card: newCard }))
    )
  );

  /**
   * This effect handles components requesting a card change to the carousel. This
   * It is important to note that this function should not be called by the carousel itself in order to prevent loops
   */
  @Effect()
  currentCardChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setActiveCard),
      withLatestFrom(
        combineLatest([
          this.store.select(DisplayedCards), //cards in carousel
          this.store.select(CardsSorted), //All cards sorted
          this.store.select(CardsSortedAndFiltered), //all cards sorted and filtered by tags which the user selected
        ])
      ),
      map(([{ card }, [currCards, allCards, filteredCards]]) => {
        if (!currCards?.find((c) => c._id === card._id)) {
          //need to adjust indeces
          if (!filteredCards?.find((c) => c._id === card._id)) {
            // need to reset filter
            this.store.dispatch(resetFilter());
          }
          let newIndex = allCards?.findIndex((c) => c._id === card._id);
          if (newIndex >= 0) {
            this.store.dispatch(adjustIndeces({ allCards: allCards, newIndex: newIndex })); //adjust indeces in a way so that the new card is in the current chunk
          } else {
            console.error('Could not find card in array', card, allCards); //should not occur
            return undefined;
          }
        }
        return card;
      }),
      map((card: Card) => setActiveCardSuccess({ card: card })),
      share()
    )
  );

  /**
   * Changes the vote on a card
   */
  changeVote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeVote),
      switchMap((action) =>
        this.votes.castVote(action.vote).pipe(
          map((vote) => {
            return changeVoteSuccess({ vote: vote });
          })
        )
      ),
      share()
    )
  );

  /**
   * Fetch lectures from the server
   */
  @Effect()
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

  @Effect()
  addLecture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.addLercture),
      mergeMap((
        action //use merge map here as multiple changes could be made while the request has not terminated
      ) =>
        this.lectures.addLecture(action.lecture).pipe(
          map((res) => LectureActions.addLectureSuccess({ lecture: res })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  @Effect()
  addCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddCardActions.addCard),
      exhaustMap((cardAction) =>
        this.cards.addCard(cardAction.card).pipe(
          tap((card) => {
            setTimeout(() => {
              this.store.dispatch(setActiveCard({ card: card })); //go to last card
            }, 200);
          }),
          map((res) => AddCardActions.addCardSuccess({ card: res })),

          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  @Effect()
  updateCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateCardActions.updateCard),
      switchMap((action) =>
        this.cards.updateCard(action.card).pipe(
          tap((card) => {
            this.store.dispatch(setActiveCard({ card: card }));
          }),
          map((card) => UpdateCardActions.updateCardSuccess({ card: card })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  @Effect()
  fetchUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUserData),
      exhaustMap(() =>
        this.user.getUserInfo().pipe(
          map((info) => fetchUserDataSuccess(info)),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  @Effect()
  updateUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserData),
      switchMap((action) =>
        this.user.updateAccount(action).pipe(
          map((user) => updateUserDataSuccess(user)),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  @Effect()
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
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );
  @Effect()
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
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  @Effect()
  registerAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAccount),
      exhaustMap((user) =>
        this.user.createAccount(user).pipe(
          map((user) => {
            return auth();
          }),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );

  @Effect()
  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(auth),
      switchMap(() =>
        this.user.authentication().pipe(
          map((val) => {
            if (val) {
              this.store.dispatch(fetchUserData()); //get userData if authorization was sucessfull
            }
            return authenticated({ auth: val });
          }),

          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );
}
