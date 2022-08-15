import { GetLectures } from "../../../domain/usecases/lecture/get.lectures";
import { LectureRepository } from "../../protocols/db/lecture/lecture.repository";

export class DbGetLectures implements GetLectures {
  constructor(private readonly lectureRepository: LectureRepository) { }

  async get(params: GetLectures.Params): Promise<GetLectures.Result> {
    const lectures = await this.lectureRepository.getAll();
    return lectures;
  }
}
