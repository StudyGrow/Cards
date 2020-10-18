import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import {
  share,
  tap,
  startWith,
  withLatestFrom,
  filter,
  shareReplay,
} from "rxjs/operators";

import { catchError, map, mergeMap, exhaustMap } from "rxjs/operators";
import {
  LoadFailure,
  FetchCardsActions,
  AddCardActions,
  UpdateCardActions,
  setActiveCardIndex,
} from "../actions/cardActions";
import * as LectureActions from "../actions/LectureActions";
import { CardsService } from "../../services/cards.service";
import { LecturesService } from "../../services/lectures.service";
import { setDrawerState } from "../actions/actions";
import { Store } from "@ngrx/store";
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
} from "../actions/UserActions";
import { UserService } from "src/app/services/user.service";
import { selectActiveIndex, selectLastCardIndex } from "../selector";
import { Router } from "@angular/router";
import { NotificationsService } from "src/app/services/notifications.service";
import { SuccessMessage } from "src/app/models/Notification";

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private cards: CardsService,
    private user: UserService,
    private lectures: LecturesService,
    private store: Store<any>,
    private router: Router,
    private notifications: NotificationsService
  ) {}
  data$ = this.store.select("cardsData").pipe(share());

  @Effect()
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchCardsActions.fetchCards),
      mergeMap(() => {
        return this.cards.fetchCardsData().pipe(
          map((data) => FetchCardsActions.LoadSuccess({ data: data })),
          catchError((reason) => of(LoadFailure({ reason: reason }))),
          share()
        );
      })
    )
  );

  @Effect()
  fetchLectures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.fetchLectures),
      mergeMap(() => {
        return this.lectures.getAllLectures().pipe(
          map((data) =>
            LectureActions.fetchLecturesSuccess({ lectures: data })
          ),
          share()
        );
      })
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
          tap(() => {
            setTimeout(() => {
              this.store.dispatch(setActiveCardIndex({ index: -1 })); //go to last card
            }, 1000);
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
      withLatestFrom(this.data$.pipe(map(selectActiveIndex))),
      exhaustMap(([action, activeIndex]) =>
        this.cards.updateCard2(action.card).pipe(
          tap(() => {
            setTimeout(() => {
              this.store.dispatch(setActiveCardIndex({ index: activeIndex }));
            }, 1000);
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
              this.router.navigateByUrl("/");
              this.notifications.addNotification(
                new SuccessMessage(`Willkommen ${user.username}`)
              );
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
            this.router.navigateByUrl("/");
            if (success)
              this.notifications.addNotification(
                new SuccessMessage("Erfolgreich abgemeldet")
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
