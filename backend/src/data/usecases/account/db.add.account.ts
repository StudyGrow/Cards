import faker from "faker";
import { AddAccount } from "../../../domain/usecases/account/add.account";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbAddAccount implements AddAccount {
  constructor(private readonly accountRepository: AccountRepository) {}

  async add(accountData: AddAccount.Params): Promise<AddAccount.Result> {
    let account: AddAccount.Result = null;
    const existingAccount = await this.accountRepository.loadByUsername(
      accountData.data.username
    );
    let username = existingAccount
      ? faker.internet.userName()
      : accountData.data.username;

    account = await this.accountRepository.add({
      ...accountData.data,
      uid: accountData.user.uid,
      username: username,
      status: "active",
      confirmed: false,
      creationDate: new Date(),
    });

    return account;
  }
}
