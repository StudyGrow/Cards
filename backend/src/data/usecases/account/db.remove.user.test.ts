import { mockRemoveUserParams } from "../../../domain/mocks/mock.user";
import { throwError } from "../../../domain/mocks/test.helpers";
import { DbRemoveUser } from "./db.remove.user";

describe("DbRemoveUser Usecase", () => {
  let sut: DbRemoveUser;
  const deleteUserRepositorySpy = { deleteUser: jest.fn() };
  const groupMongodbRepositorySpy = { deleteGroupEntities: jest.fn() };

  beforeEach(() => {
    sut = new DbRemoveUser(
      deleteUserRepositorySpy as any,
      groupMongodbRepositorySpy as any
    )
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  test("should throw if deleteUserRepositorySpy throws", async () => {
    // Arrange
    deleteUserRepositorySpy.deleteUser.mockImplementationOnce(() => {
      throw new Error("any error");
    })

    // Act
    try {
      await sut.remove({ user: { userId: "userId" } })

      // Assert
      fail("Should have thrown")
    } catch (error) {
      expect((error as any).message).toEqual("any error")
    }
  });
  test("should throw if groupMongodbRepositorySpy throws", async () => {
    // Arrange
    groupMongodbRepositorySpy.deleteGroupEntities.mockImplementationOnce(() => {
      throw new Error("any error");
    })

    // Act
    try {
      await sut.remove({ user: { userId: "userId" } })

      // Assert
      fail("Should have thrown")
    } catch (error) {
      expect((error as any).message).toEqual("any error")
    }
  });

  test("should return what deleteUserRepository returns", async () => {
    // Arrange
    deleteUserRepositorySpy.deleteUser.mockResolvedValueOnce("deletedUser")

    // Act
    const user = await sut.remove({ user: { userId: "userId" } })

    // Assert
    expect(user).toEqual("deletedUser")
  });
});
