import { DbUpdateCard } from "../../../../data/usecases/card/db.update.card";
import { UpdateCard } from "../../../../domain/usecases/card/update.card";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";
import { CardMongoRepository } from "../../../../infrastructure/db/mongodb/card/card.mongodb.repository";

export const makeDbUpdateCard = (): UpdateCard => {
  const cardMongoRepository = new CardMongoRepository();
  const accountMongoRepository = new AccountMongoRepository();
  return new DbUpdateCard(accountMongoRepository, cardMongoRepository);
};
