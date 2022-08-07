export interface MailService {
  send: (
    data: MailService.Params
  ) => Promise<MailService.Result>
}

export namespace MailService {
  export type Params = {
    recipient: string,
    subject: string,
    content: string
  };

  export type Result = void;
}
