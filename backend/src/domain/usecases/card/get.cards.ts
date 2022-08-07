import { Card } from "../../../main/docs/models/card.model";
import { GetCardsInput } from "../../../main/graphql/resolvers/card/input/get.cards.input";

export interface GetCards {
  get: (params: GetCards.Params) => Promise<GetCards.Result>;
}

export namespace GetCards {
  export type Params = {
    data: GetCardsInput;
  };

  export type Result = Card[];
}
