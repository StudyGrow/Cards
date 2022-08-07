import { mockGetAccountByIdParams } from "../../../domain/mocks/mock.account";
import { throwError } from "../../../domain/mocks/test.helpers";
import { GetAccountByIdRepositorySpy } from "../../mocks/mock.db.account";
import { DbGetAccountById } from "./db.get.account.by.id";

type SutTypes = {
    sut: DbGetAccountById;
    getAccountByIdRepositorySpy: GetAccountByIdRepositorySpy;
};

const makeSut = (): SutTypes => {
    const getAccountByIdRepositorySpy = new GetAccountByIdRepositorySpy();
    const sut = new DbGetAccountById(getAccountByIdRepositorySpy);
    return {
        sut,
        getAccountByIdRepositorySpy,
    };
};

describe("DbGetAccountById Usecase", () => {
    test("should throw if GetAccountByIdRepository throws", async () => {
        const { sut, getAccountByIdRepositorySpy } = makeSut();
        jest
            .spyOn(getAccountByIdRepositorySpy, "getById")
            .mockImplementationOnce(throwError);
        const promise = sut.get(mockGetAccountByIdParams());
        await expect(promise).rejects.toThrow();
    });
    test("Should call GetAccountByIdRepository with correct values", async () => {
        const { sut, getAccountByIdRepositorySpy } = makeSut();
        const getAccountByIdParams = mockGetAccountByIdParams();
        await sut.get(getAccountByIdParams);
        expect(getAccountByIdRepositorySpy.request).toEqual(
            getAccountByIdParams.id
        );
    });

    test("should return null when GetAccountByIdRepository returns null", async () => {
        const { sut, getAccountByIdRepositorySpy } = makeSut();
        jest
            .spyOn(getAccountByIdRepositorySpy, "getById")
            .mockReturnValueOnce(Promise.resolve(null));
        const account = await sut.get(mockGetAccountByIdParams());
        expect(account).toBeNull();
    });

    test("should return account with correct id", async () => {
        const { sut, getAccountByIdRepositorySpy } = makeSut();
        const account = await sut.get(mockGetAccountByIdParams());
        expect(account).toEqual(getAccountByIdRepositorySpy.result);
    });
});
