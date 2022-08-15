import { Authentication } from "../../../domain/usecases/authentication/authentication";
import { TokenGenerator } from "../../protocols/cryptography/token.generator";
import { HashComparer } from "../../protocols/cryptography/hash.comparer";
import { TokenType } from "../../protocols/cryptography/token.type";
import { AccountRepository } from "../../protocols/db/account/account.repository";

export class DbAuthentication implements Authentication {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly hashComparer: HashComparer,
    private readonly TokenGenerator: TokenGenerator
  ) { }

  async auth(
    authenticationParams: Authentication.Params
  ): Promise<Authentication.Result> {
    const account = await this.accountRepository.loadByUsername(
      authenticationParams.username
    );
    if (account) {
      const isValid = await this.hashComparer.compare(
        authenticationParams.password,
        account.user.password
      );
      if (isValid) {
        const authToken = await this.TokenGenerator.generateToken(
          account.user._id!,
          account.user.role,
          TokenType.AuthToken
        );
        const refreshToken = await this.TokenGenerator.generateToken(
          account.user._id!,
          account.user.role,
          TokenType.RefreshToken
        );

        return {
          authToken: authToken,
          refreshToken: refreshToken,
          user: account.user,
        };
      }
      return null;
    }
    return null;
  }
}
