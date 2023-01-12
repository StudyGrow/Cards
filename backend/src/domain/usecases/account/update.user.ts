import { User } from "../../../main/docs/models/user.model";
import { UpdateUserInput } from "../../../main/graphql/resolvers/user/input/update.user.input";
import { EmailInUseError } from "../../../response/errors/email.in.use.error";

export interface UpdateUser {
  update: (account: UpdateUser.Params) => Promise<UpdateUser.Result>;
}

export namespace UpdateUser {
  export type Params = {
    data: UpdateUserInput,
    user: {
      userId: string;
    }
  };

  export type Result = User | null | EmailInUseError;
}
