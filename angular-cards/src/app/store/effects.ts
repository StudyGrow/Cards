import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import { share } from "rxjs/operators";

import { catchError, map, mergeMap, exhaustMap } from "rxjs/operators";
import { LoadFailure, FetchCardsActions, AddCardActions } from "./actions";
import { CardsService } from "../services/cards.service";

@Injectable()
export class CardsEffects {
  constructor(private actions$: Actions, private cs: CardsService) {}

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
}
