import { SendPasswordResetRequestMail as ISendPasswordResetRequestMail } from "../../../../data/protocols/mail.service/send.password.reset.request.mail";
import { SendPasswordResetRequestMail } from "../../../../data/usecases/mailservice/send.password.reset.request.mail";
import { RandomNumberGeneratorAdapter } from "../../../../infrastructure/cryptography/random.number.generator.adapter";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";
import { makeMailService } from "./mail.service.factory";

export const makeSendPasswordResetRequestMail = (): ISendPasswordResetRequestMail => {
  const mailService = makeMailService()
  const accountMongoRepository = new AccountMongoRepository()
  const randomNumberGenerator = new RandomNumberGeneratorAdapter()
  return new SendPasswordResetRequestMail(
    mailService,
    accountMongoRepository,
    accountMongoRepository,
    randomNumberGenerator,
  );
}
