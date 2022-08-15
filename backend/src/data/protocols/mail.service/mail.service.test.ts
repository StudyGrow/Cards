import { MailServiceSpy, TransporterSpy } from "../../mocks/mock.mail.service";
import { Transporter } from "nodemailer";
import MailService from "../../usecases/mailservice/mail.service";
import config from "../../../config/config";

describe("Mail Service", () => {
  test("should send a mail", async () => {
    const transporterSpy = new (TransporterSpy) as Transporter
    const mailServiceSpy = new MailServiceSpy
    const mailService = new MailService(transporterSpy);

    jest.spyOn(transporterSpy, "sendMail")

    await mailService.send(mailServiceSpy.data);

    expect(transporterSpy.sendMail).toHaveBeenCalledWith({
      from: config.mail.auth.user,
      to: mailServiceSpy.data.recipient,
      subject: mailServiceSpy.data.subject,
      html: mailServiceSpy.data.content
    })
  })
})
