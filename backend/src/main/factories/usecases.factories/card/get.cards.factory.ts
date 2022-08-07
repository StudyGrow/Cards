import { DbGetCards } from "../../../../data/usecases/card/db.get.cards";
import { GetCards } from "../../../../domain/usecases/card/get.cards";
import { CardMongoRepository } from "../../../../infrastructure/db/mongodb/card/card.mongodb.repository";

export const makeDbGetCards = (): GetCards => {
  const cardMongoRepository = new CardMongoRepository();
  return new DbGetCards(cardMongoRepository);
};
