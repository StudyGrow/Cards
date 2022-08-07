import { RoleEnum } from "../../../main/docs/models/user.model";
import { TokenType } from "./token.type";

export interface TokenGenerator {
  generateToken: (id: string, role: RoleEnum, tokenType: TokenType) => Promise<string>;
}
