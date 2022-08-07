import { DbUpdateUser } from "../../../../data/usecases/account/db.update.user";
import { UpdateUser } from "../../../../domain/usecases/account/update.user";
import { BcryptAdapter } from "../../../../infrastructure/cryptography/bcrypt-adapter";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";

export const makeDbUpdateUser = (): UpdateUser => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const accountMongoRepository = new AccountMongoRepository();
  return new DbUpdateUser(
    bcryptAdapter,
    accountMongoRepository,
    accountMongoRepository,
    accountMongoRepository
  );
};
