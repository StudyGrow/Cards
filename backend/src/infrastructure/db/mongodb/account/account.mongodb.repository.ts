import { getModelForClass } from "@typegoose/typegoose";
import {
  AccountRepository,
  AddAccountRepository,
  CheckAccountByEmailRepository,
  DeleteUserRepository,
  EditUserRepository,
  GetAccountByIdRepository,
  GetUsersRepository,
  LoadAccountByEmailRepository,
} from "../../../../data/protocols/db/account/account.repository";
import { User } from "../../../../main/docs/models/user.model";
import { UpdateUserInput } from "../../../../main/graphql/resolvers/user/input/update.user.input";

export class AccountMongoRepository implements AccountRepository {
  async getById(id: GetAccountByIdRepository.Request) {
    return await getModelForClass(User).findById(id);
  }
  async add(
    data: AddAccountRepository.Params
  ): Promise<AddAccountRepository.Result> {
    // ensure saving users email with lowercase
    data.email = data.email.toLocaleLowerCase();
    const result = await getModelForClass(User).create(data);
    return result;
  }
  async loadByEmail(
    email: string
  ): Promise<LoadAccountByEmailRepository.Result> {
    email = email.toLocaleLowerCase();
    const user = await getModelForClass(User).findOne({ email: email });
    if (user) {
      return { user: { ...user.toObject(), _id: user._id!!.toString() } };
    } else {
      return null;
    }
  }
  async checkByEmail(
    email: string
  ): Promise<CheckAccountByEmailRepository.Result> {
    email = email.toLocaleLowerCase();
    const account = await getModelForClass(User).findOne({
      email: email,
    });
    if (account != null) {
      return true;
    } else {
      return false;
    }
  }
  async editUser(
    data: EditUserRepository.Request
  ): Promise<EditUserRepository.Result> {
    if ((data.data as UpdateUserInput).email) {
      (data.data as UpdateUserInput).email = (
        data.data as UpdateUserInput
      ).email?.toLocaleLowerCase();
    }
    const user = await getModelForClass(User).findByIdAndUpdate(
      { _id: data.userId },
      data.data,
      { new: true }
    );
    if (user) {
      return user.toObject();
    } else {
      return null;
    }
  }

  async deleteUser(
    data: DeleteUserRepository.Request
  ): Promise<DeleteUserRepository.Result> {
    const user = await getModelForClass(User).findByIdAndDelete({
      _id: data.userId,
    });
    if (user) {
      return true;
    } else {
      return null;
    }
  }
  async getAllUsers(
    data: GetUsersRepository.Request
  ): Promise<GetUsersRepository.Result> {
    const users = await getModelForClass(User).find();
    if (users) {
      return users;
    } else {
      return null;
    }
  }
}
