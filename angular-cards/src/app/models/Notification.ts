export abstract class Notification {
  type: string;
  message: string;

  constructor(t: string, m: string) {
    this.type = t;
    this.message = m;
  }
}

export class HttpError extends Notification {
  code: number;
  constructor(m: string, c?: number) {
    super("warning", m);
    this.code = c;
  }
}

export class InfoMessage extends Notification {
  constructor(m: string) {
    super("info", m);
  }
}
export class SuccessMessage extends Notification {
  constructor(m: string) {
    super("success", m);
  }
}
