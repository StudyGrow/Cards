import { Lecture } from "../../../main/docs/models/lecture.model";
import { GetLectureInput } from "../../../main/graphql/resolvers/lecture/input/get.lecture.input";

export interface GetLecture {
  get: (params: GetLecture.Params) => Promise<GetLecture.Result>;
}

export namespace GetLecture {
  export type Params = GetLectureInput;

  export type Result = Lecture | null;
}
