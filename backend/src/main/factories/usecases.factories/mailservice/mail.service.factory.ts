import config from "../../../../config/config";
import nodemailer from "nodemailer";
import { MailService as IMailService } from "../../../../data/protocols/mail.service/mail.service";
import MailService from "../../../../data/usecases/mailservice/mail.service";

export const makeMailService = (): IMailService => {
    const transporter = nodemailer.createTransport({
        host: config.mail.host,
        port: config.mail.port,
        auth: {
            user: config.mail.auth.user,
            pass: config.mail.auth.pass
        }
    });

    return new MailService(transporter);
}