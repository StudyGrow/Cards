import faker from "faker";
import { RoleEnum, User } from "../../main/docs/models/user.model";
import { EditUserInput } from "../../main/graphql/resolvers/user/input/edit.user.input";
import { RemoveUser } from "../usecases/account/remove.user";
import { UpdateUser } from "../usecases/account/update.user";
import { Authentication } from "../usecases/authentication/authentication";

export const mockEditUserParams = (): EditUserInput => ({
  userId: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  role: RoleEnum.user
});

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockRemoveUserParams = (): RemoveUser.Params => ({
  user: {
    userId: faker.datatype.uuid(),
  },
});

export const mockUpdateUserParams = (userId?: string): UpdateUser.Params => ({
  data: {
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  },
  user: {
    userId: userId ? userId : faker.datatype.uuid(),
  },
});

export const mockUser = (): User => (
  {
    _id: faker.datatype.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: RoleEnum.user,
  }
);

export const mockUserWithValidResetCode = (code?: string): User => (
  {
    _id: faker.datatype.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: RoleEnum.user,
    resetPasswordData: {
      code: code || faker.datatype.uuid(),
      expiration: faker.date.future(),
    },
  }
);
