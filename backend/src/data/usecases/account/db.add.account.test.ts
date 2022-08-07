import { mockAddAccountParams } from "../../../domain/mocks/mock.account";
import { throwError } from "../../../domain/mocks/test.helpers";
import { RoleEnum } from "../../../main/docs/models/user.model";
import { AddAccountRepositorySpy, CheckAccountByEmailRepositorySpy } from "../../mocks/mock.db.account";
import { HasherSpy } from "../../mocks/mock.hasher";
import { DbAddAccount } from "./db.add.account";

type SutTypes = {
  sut: DbAddAccount;
  hasherSpy: HasherSpy;
  addAccountRepositorySpy: AddAccountRepositorySpy;
  checkAccountByEmailRepositorySpy: CheckAccountByEmailRepositorySpy;
};
const makeSut = (): SutTypes => {
  const checkAccountByEmailRepositorySpy =
    new CheckAccountByEmailRepositorySpy();
  const hasherSpy = new HasherSpy();
  const addAccountRepositorySpy = new AddAccountRepositorySpy();
  const sut = new DbAddAccount(
    hasherSpy,
    addAccountRepositorySpy,
    checkAccountByEmailRepositorySpy
  );
  return {
    sut,
    hasherSpy,
    addAccountRepositorySpy,
    checkAccountByEmailRepositorySpy,
  };
};

describe("DbAddAccount Usecase", () => {
  test("Should call Hasher with correct plaintext", async () => {
    const { sut, hasherSpy } = makeSut();
    const addAccountParams = mockAddAccountParams();
    await sut.add(addAccountParams);
    expect(hasherSpy.plaintext).toBe(addAccountParams.password);
  });

  test("Should throw if Hasher throws", async () => {
    const { sut, hasherSpy } = makeSut();
    jest.spyOn(hasherSpy, "hash").mockImplementationOnce(throwError);
    const promise = sut.add(mockAddAccountParams());
    await expect(promise).rejects.toThrow();
  });

  test("Should call AddAccountRepository with correct values", async () => {
    const { sut, addAccountRepositorySpy, hasherSpy } = makeSut();
    const addAccountParams = mockAddAccountParams();
    await sut.add(addAccountParams);
    expect(addAccountRepositorySpy.params).toEqual({
      email: addAccountParams.email,
      password: hasherSpy.digest,
      role: RoleEnum.user
    });
  });

  test("Should throw if AddAccountRepository throws", async () => {
    const { sut, addAccountRepositorySpy } = makeSut();
    jest
      .spyOn(addAccountRepositorySpy, "add")
      .mockImplementationOnce(throwError);
    const promise = sut.add(mockAddAccountParams());
    await expect(promise).rejects.toThrow();
  });

  test("Should return true on success", async () => {
    const { sut, checkAccountByEmailRepositorySpy } = makeSut();
    checkAccountByEmailRepositorySpy.result = false;
    let mockedAccount = mockAddAccountParams();
    const addedAccount = await sut.add(mockedAccount);
    expect(addedAccount).not.toBe(null);
  });

  test("Should return account with role 'user'", async () => {
    const { sut, checkAccountByEmailRepositorySpy } = makeSut();
    checkAccountByEmailRepositorySpy.result = false;
    let mockedAccount = mockAddAccountParams();
    const addedAccount = await sut.add(mockedAccount);
    expect(addedAccount).not.toBe(null);
    expect(addedAccount?.role).toBe(RoleEnum.user);
  });

  test("Should return null if AddAccountRepository returns null", async () => {
    const { sut, addAccountRepositorySpy } = makeSut();
    addAccountRepositorySpy.result = null;
    const isValid = await sut.add(mockAddAccountParams());
    expect(isValid).toBe(null);
  });

  test("Should return null if CheckAccountByEmailRepository returns true", async () => {
    const { sut, checkAccountByEmailRepositorySpy } = makeSut();
    checkAccountByEmailRepositorySpy.result = true;
    const isValid = await sut.add(mockAddAccountParams());
    expect(isValid).toBe(null);
  });

  test("Should call LoadAccountByEmailRepository with correct email", async () => {
    const { sut, checkAccountByEmailRepositorySpy } = makeSut();
    const addAccountParams = mockAddAccountParams();
    await sut.add(addAccountParams);
    expect(checkAccountByEmailRepositorySpy.email).toBe(addAccountParams.email);
  });
});
