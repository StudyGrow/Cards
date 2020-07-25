import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import { share, tap } from "rxjs/operators";

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

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private cs: CardsService,
    private lectures: LecturesService
  ) {}

  @Effect()
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchCardsActions.fetchCards),
      mergeMap(() =>
        this.cs.fetchCardsData().pipe(
          map((data) => FetchCardsActions.LoadSuccess({ data: data })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      )
    )
  );

  @Effect()
  fetchLectures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LectureActions.fetchLectures),
      mergeMap(() =>
        this.lectures.getAllLectures().pipe(
          map((data) =>
            LectureActions.fetchLecturesSuccess({ lectures: data })
          ),
          catchError((reason) => of(LoadFailure({ reason: reason }))),
          share()
        )
      )
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
      exhaustMap((action) =>
        this.cs.addCard(action.card).pipe(
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
        this.cs.updateCard2(action.card).pipe(
          map((card) => UpdateCardActions.updateCardSuccess({ card: card })),
          catchError((reason) => of(LoadFailure({ reason: reason })))
        )
      ),
      share()
    )
  );
}
