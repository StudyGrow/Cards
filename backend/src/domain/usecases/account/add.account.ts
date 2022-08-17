import { User } from "../../../main/docs/models/user.model";
import { CreateAccountInput } from "../../../main/graphql/resolvers/user/input/create.account.input";

export interface AddAccount {
  add: (account: AddAccount.Params) => Promise<AddAccount.Result>;
}

export namespace AddAccount {
  export type Params = {
    data: CreateAccountInput;
    user: {
      uid: string;
    };
  };

  export type Result = User | null;
}
