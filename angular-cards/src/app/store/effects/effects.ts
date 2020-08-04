import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import { share, tap, startWith, withLatestFrom } from "rxjs/operators";

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
import {
  incrementLoading,
  decrementLoading,
  setDrawerState,
} from "../actions/actions";
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
} from "../actions/UserActions";
import { UserService } from "src/app/services/user.service";
import { selectActiveIndex, selectLastCardIndex } from "../selector";

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private cs: CardsService,
    private user: UserService,
    private lectures: LecturesService,
    private store: Store<any>
  ) {}
  data$ = this.store.select("cardsData").pipe(share());
  @Effect()
  loadCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FetchCardsActions.fetchCards),
      mergeMap(() => {
        incrementLoading();
        return this.cs.fetchCardsData().pipe(
          tap(() => {
            decrementLoading();
          }),
          map((data) => FetchCardsActions.LoadSuccess({ data: data })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      })
    );
  });

  @Effect()
  fetchLectures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.fetchLectures),
      mergeMap(() => {
        incrementLoading();
        return this.lectures.getAllLectures().pipe(
          tap(() => decrementLoading()),
          map((data) =>
            LectureActions.fetchLecturesSuccess({ lectures: data })
          ),
          catchError((reason) => of(LoadFailure({ reason: reason }))),
          share()
        );
      })
    )
  );

  @Effect()
  addLecture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.addLercture),
      exhaustMap((action) => {
        incrementLoading();
        return this.lectures.addLecture(action.lecture).pipe(
          tap(() => decrementLoading()),
          map((res) => LectureActions.addLectureSuccess({ lecture: res })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  addCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddCardActions.addCard),
      exhaustMap((action) => {
        incrementLoading();
        return this.cs.addCard(action.card).pipe(
          tap(() => {
            decrementLoading();
          }),
          map((res) => AddCardActions.addCardSuccess({ card: res })),
          tap(() => {
            setTimeout(() => {
              setActiveCardIndex({ index: -1 }); //go to last card
            }, 700);
          }),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  updateCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateCardActions.updateCard),
      withLatestFrom(this.data$.pipe(map(selectActiveIndex))),
      exhaustMap(([action, activeIndex]) => {
        incrementLoading();
        return this.cs.updateCard2(action.card).pipe(
          tap((card) => {
            setTimeout(() => {
              setActiveCardIndex({ index: activeIndex });
            }, 700);
            decrementLoading();
          }),
          map((card) => UpdateCardActions.updateCardSuccess({ card: card })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  fetchUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUserData),
      mergeMap(() => {
        incrementLoading();
        return this.user.getUserInfo().pipe(
          tap(() => {
            decrementLoading();
          }),
          map((info) => fetchUserDataSuccess(info)),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  updateUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserData),
      exhaustMap((action) => {
        incrementLoading();
        return this.user.updateAccount(action).pipe(
          tap(() => {
            decrementLoading();
          }),
          map((user) => updateUserDataSuccess(user)),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((user) => {
        incrementLoading();
        return this.user.login(user).pipe(
          tap(() => {
            decrementLoading();
          }),
          map((user) => loginSuccess(user)),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(auth),
      mergeMap(() => {
        return this.user.authentication().pipe(
          map((val) => authenticated({ auth: val })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );

  @Effect()
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() => {
        return this.user.logoutServer().pipe(
          tap(() => setDrawerState({ show: false })),
          map(() => logoutSuccess()),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      })
    )
  );
}
