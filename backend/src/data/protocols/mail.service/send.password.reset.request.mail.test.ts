import { LoadAccountByEmailRepositorySpy } from "../../mocks/mock.db.account";
import { EditUserRepositorySpy } from "../../mocks/mock.db.user";
import { RandomNumberGeneratorSpy } from "../../mocks/mock.generator";
import { MailServiceSpy, SendPasswordResetRequestMailSpy } from "../../mocks/mock.mail.service";
import { resetRequestMailContent, SendPasswordResetRequestMail } from "../../usecases/mailservice/send.password.reset.request.mail";

describe("Send Password Reset Request Mail", () => {
    test("should send a reset mail", async () => {
        const mailServiceSpy = new MailServiceSpy
        const loadByEmail = new LoadAccountByEmailRepositorySpy
        const editUserSpy = new EditUserRepositorySpy
        const sendPasswordResetRequestMailSpy = new SendPasswordResetRequestMailSpy
        const randomNumberGeneratorSpy = new RandomNumberGeneratorSpy;
        const sendPasswordResetRequestMail = new SendPasswordResetRequestMail(mailServiceSpy, loadByEmail, editUserSpy, randomNumberGeneratorSpy);

        jest.spyOn(mailServiceSpy, "send")
        await sendPasswordResetRequestMail.send(sendPasswordResetRequestMailSpy.data);

        expect(mailServiceSpy.send).toHaveBeenCalledWith({
            recipient: sendPasswordResetRequestMailSpy.data.email,
            subject: "Passwort zurücksetzen.",
            content: resetRequestMailContent(randomNumberGeneratorSpy.number, loadByEmail.result?.user.firstName || "", loadByEmail.result?.user.lastName || "", sendPasswordResetRequestMailSpy.data.email)
        })
    })
})