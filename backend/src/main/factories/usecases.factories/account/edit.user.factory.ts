import { DbEditUser } from "../../../../data/usecases/account/db.edit.user";
import { EditUser } from "../../../../domain/usecases/account/edit.user";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeDbEditUser = (): EditUser => {
  const accountMongoRepository = new AccountMongoRepository();
  return new DbEditUser(
    accountMongoRepository,
  );
};
