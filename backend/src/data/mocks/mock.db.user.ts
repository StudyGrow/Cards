import faker from "faker";
import { RoleEnum } from "../../main/docs/models/user.model";
import { DeleteUserRepository } from "../protocols/db/account/delete.user.repository";
import { EditUserRepository } from "../protocols/db/account/edit.user.repository";

export class EditUserRepositorySpy implements EditUserRepository {
  params: EditUserRepository.Request = {
    data: {
      userId: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      role: RoleEnum.user,
      password: faker.internet.password(),
    },
    userId: faker.datatype.uuid(),
  };
  result: EditUserRepository.Result = {
    _id: faker.datatype.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    role: RoleEnum.user
  };

  async editUser(
    params: EditUserRepository.Request
  ): Promise<EditUserRepository.Result> {
    this.params = params;
    return this.result;
  }
}

export class RemoveUserRepositorySpy implements DeleteUserRepository {
  request: DeleteUserRepository.Request = {
    userId: faker.datatype.uuid(),
  };

  result: DeleteUserRepository.Result = true;

  async deleteUser(
    params: DeleteUserRepository.Request
  ): Promise<DeleteUserRepository.Result> {
    this.request = params;
    return this.result;
  }

}
