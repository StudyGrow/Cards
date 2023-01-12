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
    const user = await getModelForClass(User).findOne({
      uid: id,
    });

    if (user) {
      return { ...user.toObject(), _id: user._id!!.toString() };
    } else {
      return null;
    }
  }
  async add(
    data: AddAccountRepository.Params
  ): Promise<AddAccountRepository.Result> {
    // ensure saving users email with lowercase
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

  async loadByUsername(
    username: string
  ): Promise<LoadAccountByEmailRepository.Result> {
    const user = await getModelForClass(User)
      .findOne({ username: username })
      .lean();
    if (user) {
      return { user: { ...user, _id: user._id!!.toString() } };
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
    const user = await getModelForClass(User).findByIdAndUpdate(
      { _id: data.userId },
      {
        $set: {
          surname: data.data.lastName,
          name: data.data.firstName,
        },
      },
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
