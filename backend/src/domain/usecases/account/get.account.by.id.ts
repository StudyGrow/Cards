import { User } from "../../../main/docs/models/user.model";

export interface GetAccountById {
  get: (account: GetAccountById.Params) => Promise<GetAccountById.Result>;
}

export namespace GetAccountById {
  export type Params = { id: string };

  export type Result = User | null;
}
