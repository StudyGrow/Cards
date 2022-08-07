import { GetUsersRepository } from "../protocols/db/account/get.users.repository";

export class GetUsersRepositorySpy implements GetUsersRepository {
    request: any = {};
    result: any = [];

    async getAllUsers(): Promise<any> {
        return this.result;
    }
}