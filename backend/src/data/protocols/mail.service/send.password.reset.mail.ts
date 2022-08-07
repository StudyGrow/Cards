export interface SendPasswordResetMail {
  send: (
    data: SendPasswordResetMail.Params
  ) => Promise<SendPasswordResetMail.Result>
}

export namespace SendPasswordResetMail {
  export type Params = {
    email: string,
    code: string,
    password: string,
  };

  export type Result = true | Error;
}
