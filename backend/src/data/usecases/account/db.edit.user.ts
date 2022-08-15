import { EditUser } from "../../../domain/usecases/account/edit.user";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbEditUser implements EditUser {
  constructor(private readonly accountRepository: AccountRepository) { }

  async edit(data: EditUser.Params): Promise<EditUser.Result> {
    const account = await this.accountRepository.editUser({
      data: data,
      userId: data.userId,
    });
    return account;
  }
}
