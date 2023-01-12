import { User } from "../../../main/docs/models/user.model";

export interface GetUsers {
  getUsers: (account: GetUsers.Params) => Promise<GetUsers.Result>;
}

export namespace GetUsers {
  export type Params = void

  export type Result = User[] | null;
}
