import { SendPasswordResetMail as ISendPasswordResetMail } from "../../../../data/protocols/mail.service/send.password.reset.mail";
import { SendPasswordResetMail } from "../../../../data/usecases/mailservice/send.password.reset.mail";
import { BcryptAdapter } from "../../../../infrastructure/cryptography/bcrypt-adapter";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";
import { makeMailService } from "./mail.service.factory";

export const makeSendPasswordResetMail = (): ISendPasswordResetMail => {
  const mailService = makeMailService();
  const accountMongoRepository = new AccountMongoRepository();
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  return new SendPasswordResetMail(
    mailService,
    accountMongoRepository,
    bcryptAdapter
  );
};
