import { TokenChecker } from "../../data/protocols/cryptography/token.checker";
import { TokenGenerator } from "../../data/protocols/cryptography/token.generator";
import env from "../../main/config/env";
import { RoleEnum } from "../../main/docs/models/user.model";
import RedisClientInstance from "../db/redis/redis.client";
import { TokenType } from "../../data/protocols/cryptography/token.type";
import { UnauthorizedError } from "../../response/errors/unauthorized.error";
import jwt from "jsonwebtoken";


interface ITokenData {
  id: string;
  role: RoleEnum;
  jti?: string;
  exp?: number;
}

export class JwtAdapter implements TokenGenerator, TokenChecker {
  constructor(private readonly secret: string) { }

  /**
   * Generates a new token and saves it in redis with additional meta data 
   * the meta data is used to check the validity of the token and identify users based on their tokens later
   * 
   * @param id the id of the user thats authenticating
   * @param role the role of the user thats authenticating
   * @param tokenType e.g. Refresh token or authentication token 
   * @returns the generated token
   */
  async generateToken(id: string, role: RoleEnum, tokenType: TokenType) {
    const tokenInformation: ITokenData = { id: id, role: role };
    const jti = this.generateId(10);
    const expiresIn = this.getExpiration(tokenType)

    let token = jwt.sign(Object.assign({}, tokenInformation, { jti },), this.secret, { expiresIn: expiresIn });
    let key = (tokenType === TokenType.AuthToken ? env.authentication.redisAuthTokenKey : env.authentication.redisRefreshTokenKey) + ":" + jti;

    const redis = RedisClientInstance.getInstance();

    await redis.set(key, 'true');

    return token;
  }

  /**
   * checks validity of a token
   * 
   * @param token 
   * @param tokenType
   * @returns 
   */
  async checkToken(token: string, tokenType: TokenType): Promise<{ id: string, role: RoleEnum }> {
    let verifiedPayload: ITokenData;
    try {
      verifiedPayload = jwt.verify(token, this.secret, {
        ignoreExpiration: false,
      }) as ITokenData;
    }
    catch (error) {
      if (tokenType === TokenType.AuthToken) {
        throw new UnauthorizedError({ name: "Invalid", message: "Auth Token invalid" });
      }
      else if (tokenType === TokenType.RefreshToken) {
        throw new UnauthorizedError({ name: "Invalid", message: "Refresh Token invalid" });
      }
      else {
        throw new UnauthorizedError({ name: "Invalid", message: "Token invalid" });

      }
    }
    let jti = verifiedPayload.jti;

    if (!jti || !verifiedPayload.id || verifiedPayload.role === undefined || verifiedPayload.role === null || !verifiedPayload.exp) {
      if (tokenType === TokenType.AuthToken) {
        throw new UnauthorizedError({ name: "Invalid", message: "Auth Token invalid" });
      }
      if (tokenType === TokenType.RefreshToken) {
        throw new UnauthorizedError({ name: "Invalid", message: "Refresh Token invalid" });
      }
    }

    let key = (tokenType === TokenType.AuthToken ? env.authentication.redisAuthTokenKey : env.authentication.redisRefreshTokenKey) + ":" + jti;


    const keyPresent = await RedisClientInstance.getInstance().get(key);

    if (!verifiedPayload || !keyPresent) {
      if (tokenType === TokenType.AuthToken) {
        throw new UnauthorizedError({ name: "Invalid", message: "Auth Token invalid" });
      }
      if (tokenType === TokenType.RefreshToken) {
        throw new UnauthorizedError({ name: "Invalid", message: "Refresh Token invalid" });
      }
    }
    const expiry = new Date(0);
    expiry.setUTCSeconds(verifiedPayload.exp!);

    if (expiry < new Date()) {
      if (tokenType === TokenType.AuthToken) {
        throw new UnauthorizedError({ name: "Expired", message: "Auth Token expired" }); // NOW A REFRESH TOKEN SHOULD BE SENT from frontend! to get a new auth token
      }
      if (tokenType === TokenType.RefreshToken) {
        throw new UnauthorizedError({ name: "Expired", message: "Refresh Token expired" });  // NOW the user should be logged out for timeout reasons and be forced to sign in again
      }
    }

    return {
      id: verifiedPayload.id,
      role: verifiedPayload.role
    };

  }

  /**
   * Generates a random token
   * 
   * @param length length of the generated random id
   * @returns the random id
   */
  generateId(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  /**
   * Should calculate the expiration date of a token
   * 
   * @param tokenType 
   * @returns 
   */
  getExpiration(tokenType: TokenType) {
    const tokenLifetime = tokenType === TokenType.AuthToken ? env.authentication.jwtAuthTokenValidityDuration : tokenType === TokenType.RefreshToken ? env.authentication.jwtRefreshTokenValidityDuration : "10s";

    return tokenLifetime;
  }
}
