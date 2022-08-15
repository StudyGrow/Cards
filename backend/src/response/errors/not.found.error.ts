export class NotFoundError extends Error {
  constructor({ name, message }: { message?: string, name?: string }) {
    if (message) {
      super(message);
    } else {
      super("Not found");
    }
    if (name) {
      this.name = name;
    } else {
      this.name = "NotFoundError";
    }
  }
}
