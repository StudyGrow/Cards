import { AddCard } from "../../../../domain/usecases/card/add.card";
import { Card } from "../../../../main/docs/models/card.model";
import { GetCardsByLectureAbbreviationInput } from "../../../../main/graphql/resolvers/card/input/get.cards.by.lecture.abreviation.input";

export interface CardRepository {
  add: (data: AddCardRepository.Params) => Promise<AddCardRepository.Result>;

  update: (
    data: UpdateCardRepository.Params
  ) => Promise<UpdateCardRepository.Result>;

  delete: (
    data: DeleteCardRepository.Params
  ) => Promise<DeleteCardRepository.Result>;

  getByLectureAbbreviation: (
    params: GetCardsByLectureAbbreviation.Params
  ) => Promise<GetCardsByLectureAbbreviation.Result>;

  getById: (params: GetCardById.Params) => Promise<GetCardById.Result>;
}

export namespace AddCardRepository {
  export type Params = Card;
  export type Result = AddCard.Result;
}

export namespace UpdateCardRepository {
  export type Params = Card;
  export type Result = AddCard.Result;
}

export namespace DeleteCardRepository {
  export type Params = Card;
  export type Result = AddCard.Result;
}

export namespace GetCardsByLectureAbbreviation {
  export type Params = GetCardsByLectureAbbreviationInput;

  export type Result = Card[];
}

export namespace GetCardById {
  export type Params = {
    id: string;
  };

  export type Result = Card | null;
}
