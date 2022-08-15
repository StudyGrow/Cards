import { GetAccountById } from "../../../domain/usecases/account/get.account.by.id";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbGetAccountById implements GetAccountById {
  constructor(private readonly accountRepository: AccountRepository) { }

  async get(
    accountData: GetAccountById.Params
  ): Promise<GetAccountById.Result> {
    let account: GetAccountById.Result = null;
    account = await this.accountRepository.getById(accountData.id);
    return account;
  }
}
