import faker from "faker";
import { TokenType } from "../../data/protocols/cryptography/token.type";
import env from "../../main/config/env";
import { RoleEnum } from "../../main/docs/models/user.model";
import RedisClientInstance from "../db/redis/redis.client";
import { JwtAdapter } from "./jwt.adapter";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../../response/errors/unauthorized.error";

const makeSut = (): JwtAdapter => {
  return new JwtAdapter(env.authentication.secret);
};

describe("Jwt Adapter", () => {
  describe("generateToken", () => {
    test("Should generate and save an auth token", async () => {
      // arrange
      const generatedJTI = faker.datatype.uuid();
      const generatedToken = faker.datatype.string();
      const date = new Date();
      const sut = makeSut();
      const redisSetSpy = jest.spyOn(RedisClientInstance.getInstance(), "set");
      const generateIdSpy = jest.spyOn(sut, "generateId");
      const jwtSpy = jest.spyOn(jwt, "sign");

      generateIdSpy.mockReturnValue(generatedJTI)
      jwtSpy.mockImplementationOnce(() => generatedToken);

      const randomUserId = faker.datatype.uuid();
      let key = env.authentication.redisAuthTokenKey + ":" + generatedJTI;

      // act
      const token = await sut.generateToken(randomUserId, RoleEnum.user, TokenType.AuthToken);

      // assert
      expect(redisSetSpy).toHaveBeenCalledWith(key, "true");
      expect(token).toEqual(generatedToken);
    });

    test("Should generate and save an refresh token", async () => {
      // arrange
      const generatedJTI = faker.datatype.uuid();
      const generatedToken = faker.datatype.string();
      const date = new Date();
      const sut = makeSut();
      const redisSetSpy = jest.spyOn(RedisClientInstance.getInstance(), "set");
      const generateIdSpy = jest.spyOn(sut, "generateId");
      const jwtSpy = jest.spyOn(jwt, "sign");


      generateIdSpy.mockReturnValue(generatedJTI)
      jwtSpy.mockImplementationOnce(() => generatedToken);

      const randomUserId = faker.datatype.uuid();
      let key = env.authentication.redisRefreshTokenKey + ":" + generatedJTI;

      // act
      const token = await sut.generateToken(randomUserId, RoleEnum.user, TokenType.RefreshToken);

      // assert
      expect(redisSetSpy).toHaveBeenCalledWith(key, "true");
      expect(token).toEqual(generatedToken);
    });
  });

  describe("checkToken", () => {
    test("should throw an appropriate error if token could not be resolved", async () => {
      // arrange
      const jwtSpy = jest.spyOn(jwt, "verify");

      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 1);
      const sut = makeSut();

      jwtSpy.mockImplementationOnce(() => { throw new Error("JWT verify failed") });

      try {
        // act
        await sut.checkToken("authToken", TokenType.AuthToken)

        // assert
        throw new Error("should have thrown")
      } catch (error) {
        expect((error as any).message).toEqual("Auth Token invalid")
      }

      try {
        // act
        await sut.checkToken("authToken", TokenType.RefreshToken)

        // assert
        throw new Error("should have thrown")
      } catch (error) {
        expect((error as any).message).toEqual("Refresh Token invalid")
      }
    })
    test("Should throw an error if token is expired", async () => {
      // arrange
      const d = Date.now() / 1000;
      const expIn = d - 1
      const jti = faker.datatype.uuid();

      const sut = makeSut();
      const redisGetSpy = jest.spyOn(RedisClientInstance.getInstance(), "get");
      const jwtSpy = jest.spyOn(jwt, "verify");
      const tokenInformation = { id: "id", role: "role", exp: expIn, jti: jti };
      redisGetSpy.mockResolvedValue(jti);
      jwtSpy.mockImplementation(() => tokenInformation);

      // act
      let promise = sut.checkToken("authToken", TokenType.AuthToken)
      await expect(promise).rejects.toThrow(new UnauthorizedError({ name: "Expired", message: "Auth Token expired" }));

      promise = sut.checkToken("refreshToken", TokenType.RefreshToken)
      await expect(promise).rejects.toThrow(new UnauthorizedError({ name: "Expired", message: "Refresh Token expired" }));
    });

    test("Should return userinformation if token is valid", async () => {
      // arrange
      const d = Date.now() / 1000;
      const expIn = d + 1
      const jti = faker.datatype.uuid();


      const sut = makeSut();
      const redisGetSpy = jest.spyOn(RedisClientInstance.getInstance(), "get");
      const jwtSpy = jest.spyOn(jwt, "verify");
      const tokenInformation = { id: "id", role: "role", exp: expIn, jti: jti };
      redisGetSpy.mockResolvedValue(jti);
      jwtSpy.mockImplementation(() => tokenInformation);

      // act
      const res = await sut.checkToken("authToken", TokenType.AuthToken)

      // assert
      expect(res.id).toEqual("id")
      expect(res.role).toEqual("role")
    });

    test("Should throw if data in verified token is missing", async () => {
      // arrange
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 1);
      const tokenInformation = { id: null, role: null, expiresAt: expiresAt, jti: null }

      const sut = makeSut();
      const jwtSpy = jest.spyOn(jwt, "verify");
      jwtSpy.mockImplementation(() => tokenInformation);

      // act
      // assert
      let promise = sut.checkToken("authToken", TokenType.AuthToken)
      await expect(promise).rejects.toThrow(new UnauthorizedError({ name: "Invalid", message: "Auth Token invalid" }));

      promise = sut.checkToken("refreshToken", TokenType.RefreshToken)
      await expect(promise).rejects.toThrow(new UnauthorizedError({ name: "Invalid", message: "Refresh Token invalid" }));

    });
  });

  describe("generateId", () => {
    test("should create an id of correct length for given length", () => {
      // arrange
      const sut = makeSut();
      const length = faker.datatype.number({ min: 1, max: 100 });
      // act
      const res = sut.generateId(length)

      // assert
      expect(res.length).toEqual(length)
    })
  })
});
