import config from "../../../config/config";
import { GroupMongodbRepository } from "../../../infrastructure/db/mongodb/project/group.mongodb.repository";
import { ResetPasswordTokenInput } from "../../../main/graphql/resolvers/user/input/edit.user.reset.password.input";
import { NotFoundError } from "../../../response/errors/not.found.error";
import { notFound } from "../../../response/helpers/http.helper";
import { RandomNumberGenerator } from "../../protocols/cryptography/random.number.generator";
import { EditUserRepository } from "../../protocols/db/account/edit.user.repository";
import { LoadAccountByEmailRepository } from "../../protocols/db/account/load.account.by.email.repository";
import { MailService as IMailService } from "../../protocols/mail.service/mail.service";
import { SendInviteGroupMail as ISendInviteGroupMail } from "../../protocols/mail.service/send.invite.group.mail";
import { SendPasswordResetRequestMail as ISendPasswordResetRequestMail } from "../../protocols/mail.service/send.password.reset.request.mail";

export const sendInviteGroupRequestContent = (code: string, firstName: string, lastName: string, email: string, groupName: string): string => {
  let name = firstName ? ` ${firstName}` : "";
  name += lastName ? ` ${lastName}` : "";

  return `
      <h1>Hallo${name},</h1>
      <p>
        du wurdest eingeladen der Gruppe ${groupName} beizutreten..</h2>
      </p>
      <h1 style="color:pink">
        Sei cool und trete bei! Das ist dein Code: ${code}. Verlier ihn nicht, denn dann hast du keine Chance cool zu sein.
      </h1>
      <p>
        Falls Sie diese E-Mail nicht angefordert haben, sind Sie nicht cool.  
      </p>
    `;
}

export class SendInviteGroupMail implements ISendInviteGroupMail {
  constructor(
    private readonly mailService: IMailService,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly groupMongodbRepository: GroupMongodbRepository,
    private readonly randomNumberGenerator: RandomNumberGenerator,
  ) { }

  async send(data: ISendInviteGroupMail.Params): Promise<ISendPasswordResetRequestMail.Result> {

    //get user by given mail
    const userData = await this.loadAccountByEmailRepository.loadByEmail(
      data.email
    );

    if (!userData?.user._id) {
      return new NotFoundError({ message: `No user found by mail ${data.email}` });
    }

    const group = await this.groupMongodbRepository.getGroupById({groupId: data.groupId})

    if(!group) {
      throw notFound({name:"not found", message: "group not found by id"})
    }
    //generate random reset token
    const inviteCode = await this.randomNumberGenerator.generateNumber(6)
    await this.mailService.send({ recipient: data.email, subject: "Gruppeneinladung", content: sendInviteGroupRequestContent(inviteCode, userData.user.firstName || "", userData.user.lastName || "", data.email, group.name) });

    // store code 
    //Set reset data in user object
    await this.groupMongodbRepository.updateInviteCode(data.groupId, userData?.user._id||"", inviteCode);

    return true;
  }
}
