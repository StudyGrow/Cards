import { AddLecture } from "../../../../domain/usecases/lecture/add.lecture";
import { Lecture } from "../../../../main/docs/models/lecture.model";
import { GetCardsByLectureAbbreviationInput } from "../../../../main/graphql/resolvers/card/input/get.cards.by.lecture.abreviation.input";

export interface LectureRepository {
  add: (
    data: AddLectureRepository.Params
  ) => Promise<AddLectureRepository.Result>;

  update: (
    data: UpdateLectureRepository.Params
  ) => Promise<UpdateLectureRepository.Result>;

  delete: (
    data: DeleteLectureRepository.Params
  ) => Promise<DeleteLectureRepository.Result>;

  getByLectureAbbreviation: (
    params: GetByLectureAbbreviationRepository.Params
  ) => Promise<GetByLectureAbbreviationRepository.Result>;

  getAll: () => Promise<GetAllLecturesRepository.Result>;

  incrementTotalCards: (
    params: IncrementTotalCardsRepository.Params
  ) => Promise<void>;

  checkUniqueLectureAbreviation: (
    params: CheckUniqueLectureAbreviationRepository.Params
  ) => Promise<CheckUniqueLectureAbreviationRepository.Result>;
}

export namespace AddLectureRepository {
  export type Params = Lecture;
  export type Result = AddLecture.Result;
}

export namespace UpdateLectureRepository {
  export type Params = Lecture;
  export type Result = AddLecture.Result;
}

export namespace DeleteLectureRepository {
  export type Params = Lecture;
  export type Result = AddLecture.Result;
}

export namespace GetByLectureAbbreviationRepository {
  export type Params = GetCardsByLectureAbbreviationInput;

  export type Result = Lecture[];
}

export namespace GetAllLecturesRepository {
  export type Result = Lecture[];
}

export namespace IncrementTotalCardsRepository {
  export type Params = {
    lectureAbbreviation: string;
  };
}

export namespace CheckUniqueLectureAbreviationRepository {
  export type Params = {
    lectureAbbreviation: string;
  };

  export type Result = boolean;
}
