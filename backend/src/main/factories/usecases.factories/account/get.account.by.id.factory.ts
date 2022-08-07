import { DbGetAccountById } from "../../../../data/usecases/account/db.get.account.by.id";
import { GetAccountById } from "../../../../domain/usecases/account/get.account.by.id";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeDbGetAccountById = (): GetAccountById => {
  const accountMongoRepository = new AccountMongoRepository();
  return new DbGetAccountById(
    accountMongoRepository,
  );
};
