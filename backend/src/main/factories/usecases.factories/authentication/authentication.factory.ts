import { DbAuthentication } from "../../../../data/usecases/authentication/db.authentication";
import { Authentication } from "../../../../domain/usecases/authentication/authentication";
import { BcryptAdapter } from "../../../../infrastructure/cryptography/bcrypt-adapter";
import { JwtAdapter } from "../../../../infrastructure/cryptography/jwt.adapter";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";
import env from "../../../config/env";

export const makeDbAuthentication = (): Authentication => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(
    env.authentication.secret,
  );
  const accountMongoRepository = new AccountMongoRepository();
  return new DbAuthentication(
    accountMongoRepository,
    bcryptAdapter,
    jwtAdapter
  );
};
