import { AddLecture } from "../../../domain/usecases/lecture/add.lecture";
import { LectureRepository } from "../../protocols/db/lecture/lecture.repository";

export class DbAddLecture implements AddLecture {
  constructor(private readonly lectureRepository: LectureRepository) {}

  async add(params: AddLecture.Params): Promise<AddLecture.Result> {
    const uniqueAbreviation =
      await this.lectureRepository.checkUniqueLectureAbreviation({
        lectureAbbreviation: params.abrv,
      });

    if (!uniqueAbreviation) {
      return null;
    }
    console.log(params);
    console.log(uniqueAbreviation);
    const addedLecture = await this.lectureRepository.add({
      ...params,
      name: params.name.trim(),
      abrv: params.abrv.trim().toLowerCase(),
    });
    return addedLecture;
  }
}
