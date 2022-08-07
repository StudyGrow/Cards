export interface SendInviteGroupMail {
  send: (
    data: SendInviteGroupMail.Params
  ) => Promise<SendInviteGroupMail.Result>
}

export namespace SendInviteGroupMail {
  export type Params = {
    email: string,
    groupId: string
  };

  export type Result = true | Error;
}
