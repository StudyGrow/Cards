export interface TokenChecker {
  checkToken: (token: string) => Promise<{ uid: string; email?: string }>;
}
