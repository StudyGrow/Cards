import { User } from "../../../main/docs/models/user.model";
import { RegisterInput } from "../../../main/graphql/resolvers/user/input/register.input";

export interface AddAccount {
  add: (account: AddAccount.Params) => Promise<AddAccount.Result>;
}

export namespace AddAccount {
  export type Params = RegisterInput;

  export type Result = User | null;
}
