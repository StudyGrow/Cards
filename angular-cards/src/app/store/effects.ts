import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ActionTypes } from "./actions";
import { CardsService } from "../services/cards.service";

@Injectable()
export class ShopEffects {
  constructor(private actions$: Actions, private cs: CardsService) {}

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType(ActionTypes.load),
    mergeMap(() =>
      this.cs.getCards().pipe(
        map((fruits) => {
          return { type: ActionTypes.LoadSuccess, payload: fruits };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
