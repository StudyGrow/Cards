import { DbAddAccount } from "../../../../data/usecases/account/db.add.account";
import { AddAccount } from "../../../../domain/usecases/account/add.account";
import { BcryptAdapter } from "../../../../infrastructure/cryptography/bcrypt-adapter";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const accountMongoRepository = new AccountMongoRepository();
  return new DbAddAccount(bcryptAdapter, accountMongoRepository);
};
