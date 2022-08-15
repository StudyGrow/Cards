import { mockUserWithValidResetCode } from "../../../domain/mocks/mock.user";
import { LoadAccountByEmailRepositorySpy } from "../../mocks/mock.db.account";
import { EditUserRepositorySpy } from "../../mocks/mock.db.user";
import { HasherSpy } from "../../mocks/mock.hasher";
import { MailServiceSpy, SendPasswordResetMailSpy } from "../../mocks/mock.mail.service";
import { resetMailContent, SendPasswordResetMail } from "../../usecases/mailservice/send.password.reset.mail";

describe("Send Password Reset", () => {
  test("should send a reset mail", async () => {
    const mailServiceSpy = new MailServiceSpy
    const sendPasswordResetMailSpy = new SendPasswordResetMailSpy
    const loadByEmail = new LoadAccountByEmailRepositorySpy
    const editUserSpy = new EditUserRepositorySpy
    const hasherSpy = new HasherSpy
    const sendPasswordResetMail = new SendPasswordResetMail(mailServiceSpy, loadByEmail, editUserSpy, hasherSpy);
    const mockedUserWithResetCode = mockUserWithValidResetCode(sendPasswordResetMailSpy.data.code);
    jest.spyOn(loadByEmail, "loadByEmail").mockReturnValue(Promise.resolve({ user: mockedUserWithResetCode }));

    jest.spyOn(mailServiceSpy, "send")
    jest.spyOn(editUserSpy, "editUser")
    await sendPasswordResetMail.send(sendPasswordResetMailSpy.data);

    expect(mailServiceSpy.send).toHaveBeenCalledWith({
      recipient: sendPasswordResetMailSpy.data.email,
      subject: "Wichtige Account Aktivität.",
      content: resetMailContent(mockedUserWithResetCode.firstName || "", mockedUserWithResetCode.lastName || "")
    })

    expect(editUserSpy.editUser).toHaveBeenCalledWith({
      userId: mockedUserWithResetCode._id,
      data: { password: hasherSpy.digest }
    })
  })
})
