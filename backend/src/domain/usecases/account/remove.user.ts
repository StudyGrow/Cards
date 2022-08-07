export interface RemoveUser {
  remove: (account: RemoveUser.Params) => Promise<RemoveUser.Result>;
}

export namespace RemoveUser {
  export type Params = {
    user: {
      userId: string;
    }
  };

  export type Result = boolean | null;
}
