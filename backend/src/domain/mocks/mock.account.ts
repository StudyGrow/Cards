import faker from "faker";
import { RoleEnum, User } from "../../main/docs/models/user.model";
import { GetAccountById } from "../usecases/account/get.account.by.id";
import { Authentication } from "../usecases/authentication/authentication";

export const mockAddAccountParams = (): User => ({
  email: faker.internet.email().toLowerCase(),
  password: faker.internet.password(),
  role: RoleEnum.user
});

export const mockEditAccountParams = (): User => ({
  email: faker.internet.email().toLowerCase(),
  password: faker.internet.password(),
  role: RoleEnum.user,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
});

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email().toLowerCase(),
  password: faker.internet.password(),
});

export const mockGetAccountByIdParams = (): GetAccountById.Params => ({
  id: faker.datatype.uuid()
});
