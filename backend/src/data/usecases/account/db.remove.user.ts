import { RemoveUser } from "../../../domain/usecases/account/remove.user";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbRemoveUser implements RemoveUser {
  constructor(private readonly accountRepository: AccountRepository) { }

  async remove(data: RemoveUser.Params): Promise<RemoveUser.Result> {
    const user = await this.accountRepository.deleteUser({
      userId: data.user.userId,
    });
    return user;
  }
}
