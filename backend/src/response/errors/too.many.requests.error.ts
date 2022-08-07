export class TooManyRequestsError extends Error {
    constructor(name?: string, message?: string) {
      if (message) {
        super(message);
      } else {
        super("too many requests");
      }
      if (name) {
        this.name = name;
      } else {
        this.name = "TooManyRequestsError";
      }
    }
  }
  