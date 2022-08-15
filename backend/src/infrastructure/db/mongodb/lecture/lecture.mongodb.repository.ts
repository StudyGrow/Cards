import { getModelForClass } from "@typegoose/typegoose";
import { LectureRepository } from "../../../../data/protocols/db/lecture/lecture.repository";
import {
  AddLectureRepository,
  UpdateLectureRepository,
  DeleteLectureRepository,
  GetByLectureAbbreviationRepository,
  GetAllLecturesRepository,
  IncrementTotalCardsRepository,
  CheckUniqueLectureAbreviationRepository,
  GetByIdRepository,
} from "../../../../data/protocols/db/lecture/lecture.repository";
import { Lecture } from "../../../../main/docs/models/lecture.model";

export class LectureMongoRepository implements LectureRepository {
  async add(
    data: AddLectureRepository.Params
  ): Promise<AddLectureRepository.Result> {
    const result = await getModelForClass(Lecture).create(data);
    return result;
  }

  async update(
    data: UpdateLectureRepository.Params
  ): Promise<UpdateLectureRepository.Result> {
    const lecture = await getModelForClass(Lecture).findByIdAndUpdate(
      { _id: data._id },
      {
        abrv: data.abrv,
        name: data.name,
      },
      { new: true }
    );

    return lecture;
  }

  async delete(
    data: DeleteLectureRepository.Params
  ): Promise<DeleteLectureRepository.Result> {
    const deleted = await getModelForClass(Lecture).findByIdAndDelete({
      _id: data._id,
    });

    return deleted;
  }

  async getByLectureAbbreviation(
    data: GetByLectureAbbreviationRepository.Params
  ): Promise<GetByLectureAbbreviationRepository.Result> {
    const result = await getModelForClass(Lecture).findOne({
      abrv: data.lectureAbreviation,
    });
    return result;
  }

  async getById(
    data: GetByIdRepository.Params
  ): Promise<GetByIdRepository.Result> {
    const result = await getModelForClass(Lecture).findOne({
      _id: data.id,
    });
    return result;
  }

  async getAll(): Promise<GetAllLecturesRepository.Result> {
    const result = await getModelForClass(Lecture).find();
    const ok = result.map((lecture) => ({
      ...lecture,
      // id: lecture._id.toString(),
    }));
    return result;
  }

  async incrementTotalCards(
    data: IncrementTotalCardsRepository.Params
  ): Promise<void> {
    await getModelForClass(Lecture).findOneAndUpdate(
      { abrv: data.lectureAbbreviation },
      { $inc: { totalCards: 1 } }
    );
  }

  async checkUniqueLectureAbreviation(
    data: CheckUniqueLectureAbreviationRepository.Params
  ): Promise<CheckUniqueLectureAbreviationRepository.Result> {
    const result = await getModelForClass(Lecture).find({
      abrv: data.lectureAbbreviation,
    });
    if (result.length > 0) {
      return false;
    }
    return true;
  }
}
