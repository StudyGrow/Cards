import { SendPasswordResetMail } from "../protocols/mail.service/send.password.reset.mail";
import faker from "faker";
import { SendPasswordResetRequestMail } from "../protocols/mail.service/send.password.reset.request.mail";
import { SendMailOptions } from "nodemailer";
import { MailService } from "../protocols/mail.service/mail.service";

export class TransporterSpy {
  sendMail(data: SendMailOptions) {
    return Promise.resolve();
  }
}
export class MailServiceSpy {
  data: MailService.Params = {
    recipient: faker.internet.email(),
    subject: faker.random.word(),
    content: faker.random.word()
  }
  send(data: MailService.Params): Promise<MailService.Result> {
    return Promise.resolve();
  }
}

export class SendPasswordResetMailSpy implements SendPasswordResetMail {
  data: SendPasswordResetMail.Params = {
    email: faker.internet.email(),
    code: faker.random.alphaNumeric(8),
    password: faker.internet.password(),
  }
  send = (data: SendPasswordResetMail.Params): Promise<true | Error> => { return Promise.resolve(true) };
  content = (): string => { return faker.random.word() };
}

export class SendPasswordResetRequestMailSpy implements SendPasswordResetRequestMail {
  data: SendPasswordResetRequestMail.Params = {
    email: faker.internet.email(),
  }
  send = (data: SendPasswordResetRequestMail.Params): Promise<true | Error> => { return Promise.resolve(true) };
  content = (string: string): string => { return string };
}
