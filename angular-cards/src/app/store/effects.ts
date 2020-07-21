import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { EMPTY, of, Observable } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ActionTypes, Actions as Act } from "./actions";
import { CardsService } from "../services/cards.service";

@Injectable()
export class CardsEffects {
  constructor(private actions$: Actions, private cs: CardsService) {}

  @Effect()
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.FETCH_CARDS),
      mergeMap(() =>
        this.cs.fetchCardsData().pipe(
          map((cards) => Act.LoadSuccess({ cards: cards })),
          catchError((reason) => of(Act.LoadFailure({ reason: reason })))
        )
      )
    )
  );
}
