import { RoleEnum } from "../../../main/docs/models/user.model";
import { TokenType } from "./token.type";

export interface TokenChecker {
  checkToken: (token: string, tokenType: TokenType) =>  Promise<{id: string, role: RoleEnum}>;
}
