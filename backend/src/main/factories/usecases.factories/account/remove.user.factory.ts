import { DbRemoveUser } from "../../../../data/usecases/account/db.remove.user";
import { RemoveUser } from "../../../../domain/usecases/account/remove.user";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeRemoveUser = (): RemoveUser => {
  const accountMongoRepository = new AccountMongoRepository();

  return new DbRemoveUser(accountMongoRepository);
};
