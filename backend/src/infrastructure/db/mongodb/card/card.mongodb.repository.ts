import { getModelForClass } from "@typegoose/typegoose";
import { CardRepository } from "../../../../data/protocols/db/card/card.repository";
import { LectureRepository } from "../../../../data/protocols/db/lecture/lecture.repository";
import {
  AddCardRepository,
  UpdateCardRepository,
  DeleteCardRepository,
  GetCardsByLectureAbbreviation,
  GetCardById,
} from "../../../../data/protocols/db/card/card.repository";
import { Card } from "../../../../main/docs/models/card.model";

export class CardMongoRepository implements CardRepository {
  async add(data: AddCardRepository.Params): Promise<AddCardRepository.Result> {
    const result = await getModelForClass(Card).create(data);
    return result;
  }

  async update(
    data: UpdateCardRepository.Params
  ): Promise<UpdateCardRepository.Result> {
    const card = await getModelForClass(Card).findByIdAndUpdate(
      { _id: data._id },
      { data },
      { new: true }
    );
    return card;
  }

  async delete(
    data: DeleteCardRepository.Params
  ): Promise<DeleteCardRepository.Result> {
    const deleted = await getModelForClass(Card).findByIdAndDelete({
      _id: data._id,
    });
    return deleted;
  }

  async getByLectureAbbreviation(
    data: GetCardsByLectureAbbreviation.Params
  ): Promise<GetCardsByLectureAbbreviation.Result> {
    const result = await getModelForClass(Card).find({
      lecture: data.lectureAbreviation,
    });

    return result;
  }

  async getById(params: GetCardById.Params): Promise<GetCardById.Result> {
    const result = await getModelForClass(Card).findById(params.id);
    return result;
  }
}
