import { Lecture } from "../../../main/docs/models/lecture.model";
import { AddLectureInput } from "../../../main/graphql/resolvers/lecture/input/add.lecture.input";

export interface AddLecture {
  add: (params: AddLecture.Params) => Promise<AddLecture.Result>;
}

export namespace AddLecture {
  export type Params = AddLectureInput;

  export type Result = Lecture | null;
}
