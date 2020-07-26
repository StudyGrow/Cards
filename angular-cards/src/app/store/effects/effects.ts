import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import { share, tap, startWith } from "rxjs/operators";

import { catchError, map, mergeMap, exhaustMap } from "rxjs/operators";
import {
  LoadFailure,
  FetchCardsActions,
  AddCardActions,
  UpdateCardActions,
} from "../actions/cardActions";
import * as LectureActions from "../actions/LectureActions";
import { CardsService } from "../../services/cards.service";
import { LecturesService } from "../../services/lectures.service";
import { incrementLoading, decrementLoading } from "../actions/actions";
import { Store } from "@ngrx/store";

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private cs: CardsService,
    private lectures: LecturesService,
    private store: Store<any>
  ) {}

  @Effect()
  loadCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FetchCardsActions.fetchCards),
      mergeMap(() => {
        this.store.dispatch(incrementLoading());
        return this.cs.fetchCardsData().pipe(
          tap(() => this.store.dispatch(decrementLoading())),
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
        this.store.dispatch(incrementLoading());
        return this.lectures.getAllLectures().pipe(
          tap(() => this.store.dispatch(decrementLoading())),
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
        this.store.dispatch(incrementLoading());
        return this.lectures.addLecture(action.lecture).pipe(
          tap(() => this.store.dispatch(decrementLoading())),
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
        this.store.dispatch(incrementLoading());
        return this.cs.addCard(action.card).pipe(
          tap(() => this.store.dispatch(decrementLoading())),
          map((res) => AddCardActions.addCardSuccess({ card: res })),
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
      exhaustMap((action) => {
        this.store.dispatch(incrementLoading());
        return this.cs.updateCard2(action.card).pipe(
          tap(() => this.store.dispatch(decrementLoading())),
          map((card) => UpdateCardActions.updateCardSuccess({ card: card })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        );
      }),
      share()
    )
  );
}
