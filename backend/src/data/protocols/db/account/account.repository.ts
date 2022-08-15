import { AddAccount } from "../../../../domain/usecases/account/add.account";
import { User } from "../../../../main/docs/models/user.model";
import { ChangeUserPasswordInput } from "../../../../main/graphql/resolvers/user/input/change.user.password.input";
import { EditUserInput } from "../../../../main/graphql/resolvers/user/input/edit.user.input";
import { ResetPasswordTokenInput } from "../../../../main/graphql/resolvers/user/input/edit.user.reset.password.input";
import { UpdateUserInput } from "../../../../main/graphql/resolvers/user/input/update.user.input";

export interface AccountRepository {
  add: (
    data: AddAccountRepository.Params
  ) => Promise<AddAccountRepository.Result>;

  checkByEmail: (
    email: string
  ) => Promise<CheckAccountByEmailRepository.Result>;

  deleteUser: (
    data: DeleteUserRepository.Request
  ) => Promise<DeleteUserRepository.Result>;

  editUser: (
    data: EditUserRepository.Request
  ) => Promise<EditUserRepository.Result>;

  getById: (
    id: GetAccountByIdRepository.Request
  ) => Promise<GetAccountByIdRepository.Result>;

  getAllUsers: (
    id: GetUsersRepository.Request
  ) => Promise<GetUsersRepository.Result>;

  loadByEmail: (email: string) => Promise<LoadAccountByEmailRepository.Result>;

  loadByUsername: (
    username: string
  ) => Promise<LoadAccountByUsernameRepository.Result>;
}

export namespace LoadAccountByEmailRepository {
  export type Result = {
    user: User;
  } | null;
}

export namespace LoadAccountByUsernameRepository {
  export type Result = {
    user: User;
  } | null;
}

export namespace GetUsersRepository {
  export type Request = void;
  export type Result = User[] | null;
}

export namespace GetAccountByIdRepository {
  export type Request = string;
  export type Result = User | null;
}

export namespace EditUserRepository {
  export type Request = {
    data:
    | EditUserInput
    | UpdateUserInput
    | ResetPasswordTokenInput
    | ChangeUserPasswordInput;
    userId: string;
  };
  export type Result = User | null;
}

export namespace DeleteUserRepository {
  export type Request = { userId: string };
  export type Result = boolean | null;
}

export namespace CheckAccountByEmailRepository {
  export type Result = boolean;
}

export namespace AddAccountRepository {
  export type Params = User;
  export type Result = AddAccount.Result;
}
