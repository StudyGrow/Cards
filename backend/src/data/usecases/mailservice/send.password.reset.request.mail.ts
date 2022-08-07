import config from "../../../config/config";
import { ResetPasswordTokenInput } from "../../../main/graphql/resolvers/user/input/edit.user.reset.password.input";
import { RandomNumberGenerator } from "../../protocols/cryptography/random.number.generator";
import { AccountRepository } from "../../protocols/db/account/account.repository";
import { MailService as IMailService } from "../../protocols/mail.service/mail.service";
import { SendPasswordResetRequestMail as ISendPasswordResetRequestMail } from "../../protocols/mail.service/send.password.reset.request.mail";

export const resetRequestMailContent = (
  code: string,
  firstName: string,
  lastName: string,
  email: string
): string => {
  let name = firstName ? ` ${firstName}` : "";
  name += lastName ? ` ${lastName}` : "";

  let resetLink = `${config.mail.website}/${config.mail.passwordResetPath}?code=${code}&email=${email}`;

  return `
      <h1>Hallo${name},</h1>
      <p>
        der Code zum Zurücksetzen deines Passworts lautet: <h2>${code}</h2>
      </p>
      <p>
      Klicke hier, um dein Passwort zurückzusetzen: <a href="${resetLink}">Passwort zurücksetzen</a>
      </p>
      <p>
      Falls der Link nicht funktioniert, kopiere den folgenden Link in deinen Browser: <br>
      <a href="${resetLink}">${resetLink}</a>
      </p>
      <p>
        Falls Sie diese E-Mail nicht angefordert haben, können Sie diese ignorieren.  
      </p>
    `;
};

export class SendPasswordResetRequestMail
  implements ISendPasswordResetRequestMail
{
  constructor(
    private readonly mailService: IMailService,
    private readonly accountRepository: AccountRepository,
    private readonly randomNumberGenerator: RandomNumberGenerator
  ) {}

  async send(
    data: ISendPasswordResetRequestMail.Params
  ): Promise<ISendPasswordResetRequestMail.Result> {
    //get user by given mail
    const userData = await this.accountRepository.loadByEmail(data.email);

    if (!userData?.user._id) {
      return true; //new NotFoundError({ message: `No user found by mail ${data.email}` });
    }

    // //generate random reset token
    // const resetCode = await this.randomNumberGenerator.generateNumber(6);
    // // await this.mailService.send({
    // //   recipient: data.email,
    // //   subject: "Passwort zurücksetzen.",
    // //   content: resetRequestMailContent(
    // //     resetCode,
    // //     userData.user.firstName || "",
    // //     userData.user.lastName || "",
    // //     data.email
    // //   ),
    // });

    // //store reset token in db together with expiration timestamp
    // //generate expiration time (current time + validityInMinutes)
    // const validityInMinutes = 60;
    // const timestamp = new Date();
    // const expiration = timestamp.setMinutes(
    //   timestamp.getMinutes() + validityInMinutes
    // );

    // const resetData: ResetPasswordTokenInput = {
    //   resetPasswordData: {
    //     code: resetCode,
    //     expiration: new Date(expiration),
    //   },
    // };

    //Set reset data in user object
    // await this.editUserRepository.editUser({ data: resetData, userId: userData.user._id });

    return true;
  }
}
