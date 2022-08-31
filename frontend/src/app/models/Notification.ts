export abstract class Notification {
  type: NotificationType;
  message: string;

  constructor(t: NotificationType, m: string) {
    this.type = t;
    this.message = m;
  }
}

export enum NotificationType {
  SUCCESS = 'success', //successfull actions
  WARNING = 'warning', //alert the user that something went wrong (dismissable)
  INFO = 'info', //notify the user about the status of his action (auto-dismiss after timeout)
}

export class WarnMessage extends Notification {
  code: number;
  constructor(m: string, c?: number) {
    super(NotificationType.WARNING, m);
    this.code = c;
  }
}

export class InfoMessage extends Notification {
  constructor(m: string) {
    super(NotificationType.INFO, m);
  }
}
export class SuccessMessage extends Notification {
  constructor(m: string) {
    super(NotificationType.SUCCESS, m);
  }
}
