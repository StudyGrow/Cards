import faker from "faker"
import { mockAddAccountParams, mockEditAccountParams } from "../../../../domain/mocks/mock.account"
import { User } from "../../../../main/docs/models/user.model"
import { MongoHelper } from "../helpers/mongodb.helper"
import { AccountMongoRepository } from "./account.mongodb.repository"

const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository();
}

describe("AccountMongoRepository", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL!);
    Date.now = jest.fn(() => new Date(Date.UTC(2020, 5, 18)).valueOf());
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
    (await MongoHelper.getCollection(User)).deleteMany({});
  });

  beforeEach(async () => {
    (await MongoHelper.getCollection(User)).deleteMany({});
  });

  describe("add()", () => {
    test("Should return an account on success", async () => {
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      const account = await sut.add(addAccountParams);
      expect(account!).toBeTruthy();
      expect(account!._id).toBeTruthy();
      expect(account!.password).toBe(addAccountParams.password);
    });

    test("Should return an account on success with lowercase email when in uppercase email passed", async () => {
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      addAccountParams.email = addAccountParams.email.toUpperCase();
      const account = await sut.add(addAccountParams);
      expect(account!).toBeTruthy();
      expect(account!.email).toBe(addAccountParams.email.toLocaleLowerCase());
      expect(account!._id).toBeTruthy();
      expect(account!.password).toBe(addAccountParams.password);
    });
  });

  describe("loadByEmail()", () => {
    test("Should return an account on success", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      await accountCollection.create(addAccountParams);
      const account = await sut.loadByEmail(addAccountParams.email);
      expect(account!).toBeTruthy();
      expect(account!.user._id).toBeTruthy();
      expect(account!.user.password).toBe(addAccountParams.password);
    });

    test("Should return an account with some uppercase email when email in lowercase exists", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      await accountCollection.create(addAccountParams);
      const account = await sut.loadByEmail(addAccountParams.email.toUpperCase());
      expect(account!).toBeTruthy();
      expect(account!.user._id).toBeTruthy();
      expect(account!.user.password).toBe(addAccountParams.password);
    });

    test("Should return null if loadByEmail fails", async () => {
      const sut = makeSut();
      const account = await sut.loadByEmail(faker.internet.email());
      expect(account).toBeFalsy();
    });
  });

  describe("checkByEmail()", () => {
    test("Should return true if email is valid", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      await accountCollection.create(addAccountParams);
      const exists = await sut.checkByEmail(addAccountParams.email);
      expect(exists).toBe(true);
    });

    test("Should return true when passed uppercase email exists as lowercase", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      addAccountParams.email = addAccountParams.email.toLocaleLowerCase();
      await accountCollection.create(addAccountParams);
      const exists = await sut.checkByEmail(addAccountParams.email.toLocaleUpperCase());
      expect(exists).toBe(true);
    });

    test("Should return false if email is not valid", async () => {
      const sut = makeSut();
      const exists = await sut.checkByEmail(faker.internet.email());
      expect(exists).toBeFalsy();
    });
  });

  describe("editUser()", () => {
    test("Should update user when user with id exists", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      const editAccountParams = mockEditAccountParams();
      const addedAccount = await accountCollection.create(addAccountParams);
      const editedAcc = await sut.editUser({ data: editAccountParams, userId: addedAccount._id });
      expect(editedAcc).toMatchObject(editAccountParams);
    });

    test("When passing new email should update email to lowercase when uppercase passed", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      const editAccountParams = mockEditAccountParams();
      const editAccountParamsWithUpperCaseEmail = { ...editAccountParams, email: editAccountParams.email.toLocaleUpperCase() };
      const addedAccount = await accountCollection.create(addAccountParams);
      const editedAcc = await sut.editUser({ data: editAccountParamsWithUpperCaseEmail, userId: addedAccount._id });
      expect(editedAcc).toMatchObject(editAccountParams);
    });

    test("Should return null if user with id does not exist", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      const editAccountParams = mockEditAccountParams();
      await accountCollection.create(addAccountParams);
      const editedAcc = await sut.editUser({ data: editAccountParams, userId: MongoHelper.getMongoObjectIdAsString() });
      expect(editedAcc).toBe(null);
    });
  });

  describe("deleteUser()", () => {
    test("Should delete user when user with id exists", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      const addAccountParams2 = mockAddAccountParams();
      await accountCollection.create(addAccountParams);
      const addedAccount = await accountCollection.create(addAccountParams2);
      let userExists = await accountCollection.findById(addedAccount._id);
      expect(userExists).toBeTruthy();
      await sut.deleteUser({ userId: addedAccount._id });
      userExists = await accountCollection.findById(addedAccount._id);
      expect(userExists).toBe(null);
    });

    test("Should delete user when user with id exists and return null", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      const addAccountParams2 = mockAddAccountParams();
      await accountCollection.create(addAccountParams);
      const addedAccount = await accountCollection.create(addAccountParams2);
      let userExists = await accountCollection.findById(addedAccount._id);
      expect(userExists).toBeTruthy();
      const deletedAcc = await sut.deleteUser({ userId: addedAccount._id });
      expect(deletedAcc).toBe(true);
    });

    test("Should return null if user with id does not exist", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      await accountCollection.create(addAccountParams);
      const deletedAcc = await sut.deleteUser({ userId: MongoHelper.getMongoObjectIdAsString() });
      expect(deletedAcc).toBe(null);
    });
  });


  describe("getAllUsers()", () => {
    test("Should get all existing users in array", async () => {
      await (await MongoHelper.getCollection(User)).deleteMany({});
      let accountCollection = await MongoHelper.getCollection(User);
      const sut = makeSut();
      const addAccountParams = mockAddAccountParams();
      const addAccountParams2 = mockAddAccountParams();
      await accountCollection.create(addAccountParams);
      await accountCollection.create(addAccountParams2);
      const allUsers = await sut.getAllUsers();
      expect(allUsers).toHaveLength(2);
      expect(allUsers![0].email).toBe(addAccountParams.email);
      expect(allUsers![1].email).toBe(addAccountParams2.email);
    });

    test("Should return empty array when no users exist", async () => {
      await (await MongoHelper.getCollection(User)).deleteMany({});
      const sut = makeSut();
      const allUsers = await sut.getAllUsers();
      expect(allUsers).toHaveLength(0);
      expect(allUsers).toStrictEqual([]);
    });
  });

});