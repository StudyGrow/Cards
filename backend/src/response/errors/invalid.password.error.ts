export class InvalidPasswordError extends Error {
  constructor(paramName: string) {
    super(`Invalid password: ${paramName}`);
    this.name = "InvalidPasswordError";
  }
}
