export class ServerError extends Error {
  constructor(stack: string, msg?: string) {
    super('Internal server error' + `: ${(msg) ? msg : ""}`)
    this.name = 'ServerError'
    this.stack = stack
  }
}
