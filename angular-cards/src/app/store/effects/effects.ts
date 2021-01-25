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
import {
  CardsSorted,
  CardsSortedAndFiltered,
  DisplayedCards,
} from '../selector';

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

  @Effect()
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchCardsActions.fetchCards),
      switchMap(() => {
        this.store.dispatch(fetchVotes());
        return this.cards.fetchCardsData().pipe(
          map((data: CardsData) =>
            FetchCardsActions.LoadSuccess({ data: data })
          ),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  fetchVotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchVotes),
      switchMap(() =>
        this.votes
          .fetchVotes()
          .pipe(map((votes) => fetchVotesSuccess({ votes: votes })))
      ),
      share()
    )
  );

  @Effect()
  navigateToCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(navigateToCard),
      tap(({ card }) => {
        let url = `vorlesung/${card.abrv ? card.abrv : card['vorlesung']}`;
        this.router.navigateByUrl(url);
      }),
      delay(200),
      map(({ card }) => {
        return setActiveCardSuccess({ card: card });
      }),
      share()
    )
  );

  @Effect()
  currentCardChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setActiveCard),
      withLatestFrom(
        combineLatest([
          this.store.select(DisplayedCards),
          this.store.select(CardsSorted),
          this.store.select(CardsSortedAndFiltered),
        ])
      ),
      map(([{ card }, [currCards, allCards, filteredCards]]) => {
        if (!currCards?.includes(card)) {
          //need to adjust indeces
          if (!filteredCards?.includes(card)) {
            // need to reset filter
            this.store.dispatch(resetFilter());
          }
          let newIndex = allCards?.indexOf(card);
          if (newIndex >= 0) {
            this.store.dispatch(
              adjustIndeces({ allCards: allCards, newIndex: newIndex })
            );
          } else {
            console.error('Could not find card in array', card, allCards);
            return undefined;
          }
        }
        return card;
      }),
      delay(200), //delay in case carousel needs refresh
      map((card: Card) => setActiveCardSuccess({ card: card })),
      share()
    )
  );

  changeVote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeVote),
      exhaustMap((action) =>
        this.votes.castVote(action.vote).pipe(
          map((vote) => {
            return changeVoteSuccess({ vote: vote });
          })
        )
      ),
      share()
    )
  );

  @Effect()
  fetchLectures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.fetchLectures),
      switchMap(() =>
        this.lectures.getAllLectures().pipe(
          map((data) => {
            return LectureActions.fetchLecturesSuccess({ lectures: data });
          })
        )
      ),
      shareReplay(1)
    )
  );

  @Effect()
  addLecture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.addLercture),
      exhaustMap((action) =>
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
            }, 3000);
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

      exhaustMap((action) =>
        this.cards.updateCard(action.card).pipe(
          tap((card) => {
            setTimeout(() => {
              this.store.dispatch(setActiveCard({ card: card }));
            }, 1200);
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
      mergeMap(() =>
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
      exhaustMap((action) =>
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
              this.notifications.addNotification(
                new SuccessMessage(`Willkommen ${user.username}`)
              );
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
      mergeMap(() =>
        this.user.logoutServer().pipe(
          tap((success) => {
            this.router.navigateByUrl('/');
            if (success)
              this.notifications.addNotification(
                new SuccessMessage('Erfolgreich abgemeldet')
              );
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
      mergeMap(() =>
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
