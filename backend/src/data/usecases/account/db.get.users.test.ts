import { throwError } from "../../../domain/mocks/test.helpers";
import { GetUsersRepositorySpy } from "../../mocks/mock.db.users";
import { DbGetUsers } from "./db.get.users";

type SutTypes = {
  sut: DbGetUsers;
  getUsersRepositorySpy: GetUsersRepositorySpy;
};

const makeSut = (): SutTypes => {
  const getUsersRepositorySpy = new GetUsersRepositorySpy();
  const sut = new DbGetUsers(getUsersRepositorySpy);
  return {
    sut,
    getUsersRepositorySpy,
  };
};

describe("DbGetUsers Usecase", () => {
  test("should throw if GetUsersRepository throws", async () => {
    const { sut, getUsersRepositorySpy } = makeSut();
    jest
      .spyOn(getUsersRepositorySpy, "getAllUsers")
      .mockImplementationOnce(throwError);
    const promise = sut.getUsers();
    await expect(promise).rejects.toThrow();
  });

  test("should call GetUsersRepository with correct values (void)", async () => {
    const { sut, getUsersRepositorySpy } = makeSut();
    await sut.getUsers();
    expect(getUsersRepositorySpy.request).toEqual({});
  });

  test("should return null when GetUsersRepository returns null", async () => {
    const { sut, getUsersRepositorySpy } = makeSut();
    jest
      .spyOn(getUsersRepositorySpy, "getAllUsers")
      .mockReturnValueOnce(Promise.resolve(null));
    const users = await sut.getUsers();
    expect(users).toBeNull();
  });

  test("should return all accounts", async () => {
    const { sut, getUsersRepositorySpy } = makeSut();
    const users = await sut.getUsers();
    expect(users).toEqual(getUsersRepositorySpy.result);
  });
});