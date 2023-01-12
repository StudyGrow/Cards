import { DbGetUsers } from "../../../../data/usecases/account/db.get.users";
import { GetUsers } from "../../../../domain/usecases/account/get.users";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeGetUsers = (): GetUsers => {
  const accountMongoRepository = new AccountMongoRepository();

  return new DbGetUsers(
    accountMongoRepository
  );
};
