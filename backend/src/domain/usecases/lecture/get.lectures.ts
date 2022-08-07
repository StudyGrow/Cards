import { Lecture } from "../../../main/docs/models/lecture.model";

export interface GetLectures {
  get: (params: GetLectures.Params) => Promise<GetLectures.Result>;
}

export namespace GetLectures {
  export type Params = void;

  export type Result = Lecture[];
}
