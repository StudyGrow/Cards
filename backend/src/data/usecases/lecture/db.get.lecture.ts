import { GetLecture } from "../../../domain/usecases/lecture/get.lecture";
import { LectureRepository } from "../../protocols/db/lecture/lecture.repository";

export class DbGetLecture implements GetLecture {
  constructor(private readonly lectureRepository: LectureRepository) { }

  async get(params: GetLecture.Params): Promise<GetLecture.Result> {
    const lecture = await this.lectureRepository.getByLectureAbbreviation({
      lectureAbreviation: params.abrv,
    });
    return lecture;
  }
}
