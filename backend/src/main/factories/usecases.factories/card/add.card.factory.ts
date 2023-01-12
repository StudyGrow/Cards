import { DbAddCard } from "../../../../data/usecases/card/db.add.card";
import { AddCard } from "../../../../domain/usecases/card/add.card";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";
import { CardMongoRepository } from "../../../../infrastructure/db/mongodb/card/card.mongodb.repository";
import { LectureMongoRepository } from "../../../../infrastructure/db/mongodb/lecture/lecture.mongodb.repository";

export const makeDbAddCard = (): AddCard => {
  const lectureMongoRepository = new LectureMongoRepository();
  const cardMongoRepository = new CardMongoRepository();
  const accountMongoRepository = new AccountMongoRepository();
  return new DbAddCard(
    accountMongoRepository,
    cardMongoRepository,
    lectureMongoRepository
  );
};
