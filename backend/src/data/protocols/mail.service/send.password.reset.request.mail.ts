export interface SendPasswordResetRequestMail {
  send: (
    data: SendPasswordResetRequestMail.Params
  ) => Promise<SendPasswordResetRequestMail.Result>
}

export namespace SendPasswordResetRequestMail {
  export type Params = {
    email: string,
  };

  export type Result = true | Error;
}
