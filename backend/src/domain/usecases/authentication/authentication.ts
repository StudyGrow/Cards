import { User } from "../../../main/docs/models/user.model";

export interface Authentication {
  auth: (
    authenticationParams: Authentication.Params
  ) => Promise<Authentication.Result>;
}

export namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    authToken: string;
    refreshToken: string;
    user: User;
  } | null;
}
