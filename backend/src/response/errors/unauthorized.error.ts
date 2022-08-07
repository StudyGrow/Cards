export class UnauthorizedError extends Error {
  constructor({ name, message }: { message?: string, name?: string }) {
    if (message) {
      super(message);
    } else {
      super("Unauthorized");
    }
    if (name) {
      this.name = name;
    } else {
      this.name = "UnauthorizedError";
    }
  }
}
