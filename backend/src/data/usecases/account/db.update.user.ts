import { UpdateUser } from "../../../domain/usecases/account/update.user";
import { UsernameInUseError } from "../../../response/errors/username.in.use.error";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbUpdateUser implements UpdateUser {
  constructor(private readonly accountRepository: AccountRepository) {}

  async update(data: UpdateUser.Params): Promise<UpdateUser.Result> {
    const accountToUpdate = await this.accountRepository.getById(
      data.user.userId
    );
    if (!accountToUpdate) {
      return null;
    }

    if (data.data.username) {
      const exists = await this.accountRepository.loadByUsername(
        data.data.username
      );
      if (exists) {
        const existingAccount = await this.accountRepository.loadByUsername(
          data.data.username
        );
        // check if the user is trying to update his own account with same email
        if (existingAccount) {
          if (existingAccount.user.uid !== data.user.userId) {
            return new UsernameInUseError();
          }
        } else {
          // should not happen but just in case to keep things safe as user should exist
          return new UsernameInUseError();
        }
      }
    }
    const user = await this.accountRepository.editUser({
      data: data.data,
      userId: accountToUpdate._id!!,
    });
    return user;
  }
}
