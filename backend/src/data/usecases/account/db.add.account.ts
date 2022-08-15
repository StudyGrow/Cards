import { AddAccount } from "../../../domain/usecases/account/add.account";
import { RoleEnum } from "../../../main/docs/models/user.model";
import { Hasher } from "../../protocols/cryptography/hasher";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly accountRepository: AccountRepository
  ) { }

  async add(accountData: AddAccount.Params): Promise<AddAccount.Result> {
    const exists = await this.accountRepository.checkByEmail(accountData.email);
    let account: AddAccount.Result = null;
    if (!exists) {
      const hashedPassword = await this.hasher.hash(accountData.password);
      account = await this.accountRepository.add({
        ...accountData,
        password: hashedPassword,
        status: "active",
        role: RoleEnum.user,
        confirmed: false,
        creationDate: new Date(),
      });
    }
    return account;
  }
}
