import { User } from "../../../main/docs/models/user.model";
import { EditUserInput } from "../../../main/graphql/resolvers/user/input/edit.user.input";

export interface EditUser {
  edit: (account: EditUser.Params) => Promise<EditUser.Result>;
}

export namespace EditUser {
  export type Params = EditUserInput;

  export type Result = User | null;
}
