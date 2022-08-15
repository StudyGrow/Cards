import faker from "faker";
import { RoleEnum } from "../../main/docs/models/user.model";
import { AddAccountRepository } from "../protocols/db/account/add.account.repository";
import { CheckAccountByEmailRepository } from "../protocols/db/account/check.account.by.email";
import { GetAccountByIdRepository } from "../protocols/db/account/get.account.by.id.repository";
import { LoadAccountByEmailRepository } from "../protocols/db/account/load.account.by.email.repository";

export class AddAccountRepositorySpy implements AddAccountRepository {
  params: AddAccountRepository.Params = {
    email: "",
    password: "",
    role: RoleEnum.user
  };
  result: AddAccountRepository.Result = {
    _id: faker.datatype.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    role: RoleEnum.user
  };

  async add(
    params: AddAccountRepository.Params
  ): Promise<AddAccountRepository.Result> {
    this.params = params;
    return this.result;
  }
}

export class LoadAccountByEmailRepositorySpy
  implements LoadAccountByEmailRepository {
  email: string = "";
  result: LoadAccountByEmailRepository.Result = {
    user: {
      _id: faker.datatype.uuid(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      role: RoleEnum.user
    },
  };

  async loadByEmail(
    email: string
  ): Promise<LoadAccountByEmailRepository.Result> {
    this.email = email;
    return this.result;
  }
}

export class CheckAccountByEmailRepositorySpy
  implements CheckAccountByEmailRepository {
  email: string = "";
  result: CheckAccountByEmailRepository.Result = false;

  async checkByEmail(
    email: string
  ): Promise<CheckAccountByEmailRepository.Result> {
    this.email = email;
    return this.result;
  }
}

export class GetAccountByIdRepositorySpy
  implements GetAccountByIdRepository {
  request: string = "";
  result: GetAccountByIdRepository.Result = {
    _id: faker.datatype.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    role: RoleEnum.user
  };

  async getById(
    id: string
  ): Promise<GetAccountByIdRepository.Result> {
    this.request = id;
    return this.result;
  }

}
