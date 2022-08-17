import { DbUpdateUser } from "../../../../data/usecases/account/db.update.user";
import { UpdateUser } from "../../../../domain/usecases/account/update.user";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeDbUpdateUser = (): UpdateUser => {
  const accountMongoRepository = new AccountMongoRepository();
  return new DbUpdateUser(accountMongoRepository);
};
