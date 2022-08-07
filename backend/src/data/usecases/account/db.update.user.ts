import { UpdateUser } from "../../../domain/usecases/account/update.user";
import { EmailInUseError } from "../../../response/errors/email.in.use.error";
import { Hasher } from "../../protocols/cryptography/hasher";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbUpdateUser implements UpdateUser {
  constructor(
    private readonly hasher: Hasher,
    private readonly accountRepository: AccountRepository
  ) {}

  async update(data: UpdateUser.Params): Promise<UpdateUser.Result> {
    if (data.data.email) {
      const exists = await this.accountRepository.checkByEmail(data.data.email);
      if (exists) {
        const existingAccount = await this.accountRepository.loadByEmail(
          data.data.email
        );
        // check if the user is trying to update his own account with same email
        if (existingAccount) {
          if (existingAccount.user._id !== data.user.userId) {
            return new EmailInUseError();
          }
        } else {
          // should not happen but just in case to keep things safe as user should exist
          return new EmailInUseError();
        }
      }
    }
    if (data.data.password) {
      const hashedPassword = await this.hasher.hash(data.data.password);
      data.data.password = hashedPassword;
    }
    const user = await this.accountRepository.editUser({
      data: data.data,
      userId: data.user.userId,
    });
    return user;
  }
}
