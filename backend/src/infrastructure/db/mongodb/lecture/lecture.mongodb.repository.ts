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
    return { ...result, id: result._id.toString() };
  }

  async update(
    data: UpdateLectureRepository.Params
  ): Promise<UpdateLectureRepository.Result> {
    const lecture = await getModelForClass(Lecture).findByIdAndUpdate(
      { _id: data.id },
      {
        abrv: data.abrv,
        name: data.name,
      },
      { new: true }
    );
    if (lecture) {
      return { ...lecture, id: lecture._id.toString() };
    }
    return null;
  }

  async delete(
    data: DeleteLectureRepository.Params
  ): Promise<DeleteLectureRepository.Result> {
    const deleted = await getModelForClass(Lecture).findByIdAndDelete({
      _id: data.id,
    });
    if (deleted) {
      return { ...deleted, id: deleted._id.toString() };
    }
    return null;
  }

  async getByLectureAbbreviation(
    data: GetByLectureAbbreviationRepository.Params
  ): Promise<GetByLectureAbbreviationRepository.Result> {
    const result = await getModelForClass(Lecture).findOne({
      abbreviation: data.lectureAbreviation,
    });

    if (result) {
      return { ...result, id: result._id.toString() };
    }
    return null;
  }

  async getById(
    data: GetByIdRepository.Params
  ): Promise<GetByIdRepository.Result> {
    const result = await getModelForClass(Lecture).findOne({
      _id: data.id,
    });

    if (result) {
      return { ...result, id: result._id.toString() };
    }
    return null;
  }

  async getAll(): Promise<GetAllLecturesRepository.Result> {
    const result = await getModelForClass(Lecture).find();
    return result.map((lecture) => ({
      ...lecture,
      id: lecture._id.toString(),
    }));
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
