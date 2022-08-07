import { Card } from "../../../main/docs/models/card.model";
import { UpdateCardInput } from "../../../main/graphql/resolvers/user/input/card/update.card.input";

export interface UpdateCard {
  update: (params: UpdateCard.Params) => Promise<UpdateCard.Result>;
}

export namespace UpdateCard {
  export type Params = {
    data: UpdateCardInput;
    user: {
      id: string;
    };
  };

  export type Result = Card | null;
}
