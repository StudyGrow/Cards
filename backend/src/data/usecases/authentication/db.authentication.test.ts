import { mockAuthenticationParams } from "../../../domain/mocks/mock.account";
import { throwError } from "../../../domain/mocks/test.helpers";
import { LoadAccountByEmailRepositorySpy } from "../../mocks/mock.db.account";
import { HashComparerSpy, TokenGeneratorSpy } from "../../mocks/mock.hasher";
import { DbAuthentication } from "./db.authentication";

type SutTypes = {
  sut: DbAuthentication;
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepositorySpy;
  hashComparerSpy: HashComparerSpy;
  tokenGeneratorSpy: TokenGeneratorSpy;
};

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy();
  const hashComparerSpy = new HashComparerSpy();
  const tokenGeneratorSpy = new TokenGeneratorSpy();
  const sut = new DbAuthentication(
    loadAccountByEmailRepositorySpy,
    hashComparerSpy,
    tokenGeneratorSpy
  );
  return {
    sut,
    loadAccountByEmailRepositorySpy,
    hashComparerSpy,
    tokenGeneratorSpy,
  };
};

describe("DbAuthentication UseCase", () => {
  test("Should call LoadAccountByEmailRepository with correct email", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();
    const authenticationParams = mockAuthenticationParams();
    await sut.auth(authenticationParams);
    expect(loadAccountByEmailRepositorySpy.email).toBe(
      authenticationParams.email
    );
  });

  test("Should throw if LoadAccountByEmailRepository throws", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();
    jest
      .spyOn(loadAccountByEmailRepositorySpy, "loadByEmail")
      .mockImplementationOnce(throwError);
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow();
  });

  test("Should return null if LoadAccountByEmailRepository returns null", async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();
    loadAccountByEmailRepositorySpy.result = null;
    const model = await sut.auth(mockAuthenticationParams());
    expect(model).toBeNull();
  });

  test("Should call HashComparer with correct values", async () => {
    const { sut, hashComparerSpy, loadAccountByEmailRepositorySpy } = makeSut();
    const authenticationParams = mockAuthenticationParams();
    await sut.auth(authenticationParams);
    expect(hashComparerSpy.plaintext).toBe(authenticationParams.password);
    expect(hashComparerSpy.digest).toBe(
      loadAccountByEmailRepositorySpy.result?.user.password
    );
  });

  test("Should throw if HashComparer throws", async () => {
    const { sut, hashComparerSpy } = makeSut();
    jest.spyOn(hashComparerSpy, "compare").mockImplementationOnce(throwError);
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow();
  });

  test("Should return null if HashComparer returns false", async () => {
    const { sut, hashComparerSpy } = makeSut();
    hashComparerSpy.isValid = false;
    const model = await sut.auth(mockAuthenticationParams());
    expect(model).toBeNull();
  });

  test("Should call TokenGenerator", async () => {

    // arrange
    const { sut, hashComparerSpy, tokenGeneratorSpy, loadAccountByEmailRepositorySpy } = makeSut();

    hashComparerSpy.isValid = true;
    tokenGeneratorSpy.generateToken
    // act
    const model = await sut.auth(mockAuthenticationParams());

    // assert
    expect(model).toEqual({
      authToken: "authToken" + loadAccountByEmailRepositorySpy.result?.user._id + loadAccountByEmailRepositorySpy.result?.user.role,
      refreshToken: "refreshToken" + loadAccountByEmailRepositorySpy.result?.user._id + loadAccountByEmailRepositorySpy.result?.user.role,
      user: loadAccountByEmailRepositorySpy.result?.user
    });
  });

  test("Should throw if TokenGenerator throws", async () => {
    // arrange
    const { sut, tokenGeneratorSpy } = makeSut();
    jest.spyOn(tokenGeneratorSpy, "generateToken").mockImplementationOnce(() => { throw new Error("some error") });

    // act
    try {
      await sut.auth(mockAuthenticationParams());

      // assert
      fail("should have thrown an error")
    } catch (error) {
      expect((error as any).message).toEqual("some error");
    }
  });
});
