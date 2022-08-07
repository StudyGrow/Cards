import { GetCards } from "../../../domain/usecases/card/get.cards";
import { CardRepository } from "../../protocols/db/card/card.repository";

export class DbGetCards implements GetCards {
  constructor(private readonly cardRepository: CardRepository) {}

  async get(params: GetCards.Params): Promise<GetCards.Result> {
    const cards = await this.cardRepository.getByLectureAbbreviation({
      lectureAbreviation: params.data.lectureAbbreviation,
    });
    return cards;
  }
}
