import { mockEditUserParams, mockUpdateUserParams, mockUser } from "../../../domain/mocks/mock.user";
import { throwError } from "../../../domain/mocks/test.helpers";
import { EmailInUseError } from "../../../response/errors/email.in.use.error";
import { CheckAccountByEmailRepositorySpy, LoadAccountByEmailRepositorySpy } from "../../mocks/mock.db.account";
import { EditUserRepositorySpy } from "../../mocks/mock.db.user";
import { HasherSpy } from "../../mocks/mock.hasher";
import { DbUpdateUser } from "./db.update.user";

type SutTypes = {
  sut: DbUpdateUser;
  hasherSpy: HasherSpy;
  editUserRepositorySpy: EditUserRepositorySpy;
  checkAccountByEmailRepositorySpy: CheckAccountByEmailRepositorySpy;
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepositorySpy;
}

const makeSut = (): SutTypes => {
  const hasherSpy = new HasherSpy;
  const editUserRepositorySpy = new EditUserRepositorySpy;
  const checkAccountByEmailRepositorySpy = new CheckAccountByEmailRepositorySpy;
  const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy;
  const sut = new DbUpdateUser(hasherSpy, editUserRepositorySpy, checkAccountByEmailRepositorySpy, loadAccountByEmailRepositorySpy);
  return {
    sut,
    hasherSpy,
    editUserRepositorySpy,
    checkAccountByEmailRepositorySpy: checkAccountByEmailRepositorySpy,
    loadAccountByEmailRepositorySpy: loadAccountByEmailRepositorySpy
  };
}

describe("DbUpdateUser Usecase", () => {
  test("should call Hasher with correct plaintext if password provided", async () => {
    const { sut, hasherSpy } = makeSut();
    const mockParams = mockUpdateUserParams(); // hier passieren wilde reference-dinge
    const password = mockParams.data.password; // deswegen extra passwort-object
    await sut.update(mockParams);
    expect(hasherSpy.plaintext).toBe(password);
  });

  test("Should throw if Hasher throws", async () => {
    const { sut, hasherSpy } = makeSut();
    jest.spyOn(hasherSpy, "hash").mockImplementationOnce(throwError);
    const promise = sut.update(mockUpdateUserParams());
    await expect(promise).rejects.toThrow();
  }
  );

  test("Should throw if EditUserRepository throws", async () => {
    const { sut, editUserRepositorySpy } = makeSut();
    jest.spyOn(editUserRepositorySpy, "editUser").mockImplementationOnce(throwError);
    const promise = sut.update(mockUpdateUserParams());
    await expect(promise).rejects.toThrow();
  }
  );

  test("Should throw if CheckAccountByEmailRepository throws", async () => {
    const { sut, checkAccountByEmailRepositorySpy: checkAccountByEmailRepository } = makeSut();
    jest.spyOn(checkAccountByEmailRepository, "checkByEmail").mockImplementationOnce(throwError);
    const promise = sut.update(mockUpdateUserParams());
    await expect(promise).rejects.toThrow();
  }
  );

  test("should call CheckAccountByEmailRepository with correct email if email provided", async () => {
    const { sut, checkAccountByEmailRepositorySpy: checkAccountByEmailRepository } = makeSut();
    const mockParams = mockUpdateUserParams();
    const email = mockParams.data.email;
    await sut.update(mockParams);
    expect(checkAccountByEmailRepository.email).toBe(email);
  }
  );

  test("should call EditUserRepository with hashed password if password provided", async () => {
    const { sut, editUserRepositorySpy } = makeSut();
    const mockParams = mockUpdateUserParams();
    await sut.update(mockParams);
    expect(editUserRepositorySpy.params).toEqual({
      data: {
        ...mockParams.data,
        password: mockParams.data.password
      },
      userId: mockParams.user.userId
    });
  });

  test("should call loadAccountByEmailRepository when checkAccountByEmailRepository return true", async () => {
    const { sut, checkAccountByEmailRepositorySpy, loadAccountByEmailRepositorySpy } = makeSut();
    const mockParams = mockUpdateUserParams();
    jest.spyOn(checkAccountByEmailRepositorySpy, "checkByEmail").mockReturnValue(Promise.resolve(true));
    jest.spyOn(loadAccountByEmailRepositorySpy, "loadByEmail");
    await sut.update(mockParams);
    expect(loadAccountByEmailRepositorySpy.loadByEmail).toBeCalled();
  });
  test("should return EmailInUseError when checkAccountByEmailRepository return true and loadAccountByEmailRepository return null", async () => {
    const { sut, checkAccountByEmailRepositorySpy, loadAccountByEmailRepositorySpy } = makeSut();
    const mockParams = mockUpdateUserParams();
    jest.spyOn(checkAccountByEmailRepositorySpy, "checkByEmail").mockReturnValue(Promise.resolve(true));
    jest.spyOn(loadAccountByEmailRepositorySpy, "loadByEmail").mockReturnValue(Promise.resolve(null));
    const result = await sut.update(mockParams);
    expect(result).toStrictEqual(new EmailInUseError());
  });

  test("should return EmailInUseError when checkAccountByEmailRepository return true and loadAccountByEmailRepository return not same account as provided", async () => {
    const { sut, checkAccountByEmailRepositorySpy, loadAccountByEmailRepositorySpy } = makeSut();
    const mockedUser = mockUser();
    const mockParams = mockUpdateUserParams();
    expect(mockParams.user.userId).not.toBe(mockedUser._id);
    jest.spyOn(checkAccountByEmailRepositorySpy, "checkByEmail").mockReturnValue(Promise.resolve(true));
    jest.spyOn(loadAccountByEmailRepositorySpy, "loadByEmail").mockReturnValue(Promise.resolve({ user: mockedUser }));
    const result = await sut.update(mockParams);
    expect(result).toStrictEqual(new EmailInUseError());
  });

  test("should return updated user when checkAccountByEmailRepository return true and loadAccountByEmailRepository return same account as provided", async () => {
    const { sut, checkAccountByEmailRepositorySpy, loadAccountByEmailRepositorySpy, editUserRepositorySpy } = makeSut();
    const mockedUser = mockUser();
    const mockParams = mockUpdateUserParams(mockedUser._id);
    jest.spyOn(checkAccountByEmailRepositorySpy, "checkByEmail").mockReturnValue(Promise.resolve(true));
    jest.spyOn(loadAccountByEmailRepositorySpy, "loadByEmail").mockReturnValue(Promise.resolve({ user: mockedUser }));
    jest.spyOn(editUserRepositorySpy, "editUser").mockReturnValue(Promise.resolve(mockedUser));
    const result = await sut.update(mockParams);
    expect(result).toStrictEqual(mockedUser);
  });
});
