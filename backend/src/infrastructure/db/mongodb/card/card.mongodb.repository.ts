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
    return { ...result, id: result._id.toString() };
  }

  async update(
    data: UpdateCardRepository.Params
  ): Promise<UpdateCardRepository.Result> {
    const card = await getModelForClass(Card).findByIdAndUpdate(
      { _id: data.id },
      { data },
      { new: true }
    );
    if (card) {
      return { ...card, id: card._id.toString() };
    }
    return null;
  }

  async delete(
    data: DeleteCardRepository.Params
  ): Promise<DeleteCardRepository.Result> {
    const deleted = await getModelForClass(Card).findByIdAndDelete({
      _id: data.id,
    });
    if (deleted) {
      return { ...deleted, id: deleted._id.toString() };
    }
    return null;
  }

  async getByLectureAbbreviation(
    data: GetCardsByLectureAbbreviation.Params
  ): Promise<GetCardsByLectureAbbreviation.Result> {
    const result = await getModelForClass(Card).find({
      lecture: data.lectureAbreviation,
    });

    return result.map((card) => ({
      ...card,
      id: card._id.toString(),
    }));
  }

  async getById(params: GetCardById.Params): Promise<GetCardById.Result> {
    const result = await getModelForClass(Card).findById(params.id);
    if (result) {
      return { ...result, id: result._id.toString() };
    }
    return null;
  }
}
