import { Card } from "../../../main/docs/models/card.model";
import { AddCardInput } from "../../../main/graphql/resolvers/card/input/add.card.input";

export interface AddCard {
  add: (params: AddCard.Params) => Promise<AddCard.Result>;
}

export namespace AddCard {
  export type Params = {
    data: AddCardInput;
    user: {
      id: string;
    };
  };

  export type Result = Card | null;
}
