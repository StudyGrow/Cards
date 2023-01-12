import { SendMailOptions, Transporter } from "nodemailer";
import config from "../../../config/config";
import { MailService as IMailService } from "../../protocols/mail.service/mail.service";

class MailService implements IMailService {
  constructor(private readonly transporter: Transporter) { }

  async send(data: IMailService.Params): Promise<IMailService.Result> {
    const mailOptions: SendMailOptions = {
      from: config.mail.auth.user,
      to: data.recipient,
      subject: data.subject,
      html: data.content
    }
    await this.transporter.sendMail(mailOptions);
  }
}

export default MailService;
