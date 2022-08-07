import { SendInviteGroupMail as ISendInviteGroupMail } from "../../../../data/protocols/mail.service/send.invite.group.mail";
import { SendInviteGroupMail } from "../../../../data/usecases/mailservice/send.invite.group.mail";
import { RandomNumberGeneratorAdapter } from "../../../../infrastructure/cryptography/random.number.generator.adapter";
import { AccountMongoRepository } from "../../../../infrastructure/db/mongodb/account/account.mongodb.repository";
import { GroupMongodbRepository } from "../../../../infrastructure/db/mongodb/project/group.mongodb.repository";
import { makeMailService } from "./mail.service.factory";

export const makeSendInviteGroupMail = (): ISendInviteGroupMail => {
  const mailService = makeMailService();
  const accountMongoRepository = new AccountMongoRepository();
  const groupMongodbRepository = new GroupMongodbRepository()
  const randomNumberGenerator = new RandomNumberGeneratorAdapter();
  return new SendInviteGroupMail(
    mailService,
    accountMongoRepository,
    groupMongodbRepository,
    randomNumberGenerator,
  );
}
