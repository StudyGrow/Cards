import { AddCard } from "../../../domain/usecases/card/add.card";
import { AccountRepository } from "../../protocols/db/account/account.repository";
import { CardRepository } from "../../protocols/db/card/card.repository";
import { LectureRepository } from "../../protocols/db/lecture/lecture.repository";

export class DbAddCard implements AddCard {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly cardRepository: CardRepository,
    private readonly lectureRepository: LectureRepository
  ) { }

  async add(params: AddCard.Params): Promise<AddCard.Result> {
    const user = await this.accountRepository.getById(params.user.id);
    if (!user) {
      return null;
    }

    const lecture = await this.lectureRepository.getByLectureAbbreviation({
      lectureAbreviation: params.data.lectureAbreviation,
    });

    if (lecture) {
      const addedCard = await this.cardRepository.add({
        ...params.data,
        authorId: user._id,
        authorName: user.username,
        date: new Date(),
      });

      await this.lectureRepository.incrementTotalCards({
        lectureAbbreviation: params.data.lectureAbreviation,
      });
      return addedCard;
    }
    return null;
  }
}
