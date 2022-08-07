import { SendPasswordResetMail as ISendPasswordResetMail } from "../../protocols/mail.service/send.password.reset.mail";
import { MailService as IMailService } from "../../protocols/mail.service/mail.service";
import { Hasher } from "../../protocols/cryptography/hasher";
import { NotFoundError } from "../../../response/errors/not.found.error";
import { UnauthorizedError } from "../../../response/errors/unauthorized.error";
import { ResetPasswordTokenInput } from "../../../main/graphql/resolvers/user/input/edit.user.reset.password.input";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export const resetMailContent = (firstName: string, lastName: string) => {
  let name = firstName ? ` ${firstName}` : "";
  name += lastName ? ` ${lastName}` : "";

  return `
  <h1>Hallo${name},</h1>
  <p>
    das Passwort für Ihr Windfarm-Profil wurde soeben zurückgesetzt.
  </p>
  <p>
    Falls Sie diese Aktion durchgeführt haben, können Sie sich mit dem neuen Passwort anmelden.
    <br>
    Falls Sie diese Aktion <em>nicht</em> durchgeführt haben, ändern Sie sofort Ihr Passwort!
  </p>
  `;
};

export class SendPasswordResetMail implements ISendPasswordResetMail {
  constructor(
    private readonly mailService: IMailService,
    private readonly accountRepository: AccountRepository,
    private readonly hasher: Hasher
  ) {}

  async send(
    data: ISendPasswordResetMail.Params
  ): Promise<ISendPasswordResetMail.Result> {
    /**
     * helperfunction to delete token from user
     */
    const deleteToken = () => {
      // delete token and expiration from user object
      const resetData: ResetPasswordTokenInput = {
        resetPasswordData: {
          code: "",
          expiration: undefined,
        },
      };
      this.accountRepository.editUser({
        userId: userData?.user._id || "",
        data: resetData,
      });
    };

    //get user by given mail
    const userData = await this.accountRepository.loadByEmail(data.email);

    if (!userData?.user._id) {
      return new NotFoundError({
        message: `No user found by mail ${data.email}`,
      });
    }

    // if (!(userData?.user.resetPasswordData?.code || userData?.user.resetPasswordData?.expiration)) {
    //   return new NotFoundError({ message: "No reset token available for this user" });
    // }

    // //check if token is valid in user object and not expired
    // const isExpired = (userData?.user?.resetPasswordData?.expiration as Date).getTime() < Date.now();

    // if (isExpired) {
    //   deleteToken();
    //   return new UnauthorizedError({ message: "Reset Token expired" });
    // }

    // //check if reset token is correct
    // const isValid = userData.user.resetPasswordData.code === data.code;
    // if (!isValid) {
    //   return new UnauthorizedError({ message: "Token verification failed" });
    // }

    // const subject = "Wichtige Account Aktivität.";
    // await this.mailService.send({
    //   recipient: data.email,
    //   subject: subject,
    //   content: resetMailContent(userData.user.firstName || "", userData.user.lastName || "")
    // });

    // //remove token
    // deleteToken();

    // //update password
    // const hashedPassword = await this.hasher.hash(data.password);
    // this.editUserRepository.editUser({ userId: userData.user._id, data: { password: hashedPassword } });
    return true;
  }
}
