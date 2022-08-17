import { DbAddAccount } from "../../../../data/usecases/account/db.add.account";
import { AddAccount } from "../../../../domain/usecases/account/add.account";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeDbAddAccount = (): AddAccount => {
  const accountMongoRepository = new AccountMongoRepository();
  return new DbAddAccount(accountMongoRepository);
};
