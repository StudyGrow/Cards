import { GetUsers } from "../../../domain/usecases/account/get.users";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbGetUsers implements GetUsers {
  constructor(private readonly accountRepository: AccountRepository) {}

  async getUsers(accountData: GetUsers.Params): Promise<GetUsers.Result> {
    const users = await this.accountRepository.getAllUsers();
    return users;
  }
}
