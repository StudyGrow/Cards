import { mockEditUserParams } from "../../../domain/mocks/mock.user";
import { throwError } from "../../../domain/mocks/test.helpers";
import { EditUserRepositorySpy } from "../../mocks/mock.db.user";
import { HasherSpy } from "../../mocks/mock.hasher";
import { DbEditUser } from "./db.edit.user";

type SutTypes = {
    sut: DbEditUser;
    hasherSpy: HasherSpy;
    editUserRepositorySpy: EditUserRepositorySpy;
};

const makeSut = (): SutTypes => {
    const editUserRepositorySpy = new EditUserRepositorySpy();
    const hasherSpy = new HasherSpy();
    const sut = new DbEditUser(editUserRepositorySpy);
    return {
        sut,
        hasherSpy,
        editUserRepositorySpy,
    };
};

describe("DbEditUser Usecase", () => {

    test("Should throw if EditUserRepository throws", async () => {
        const { sut, editUserRepositorySpy } = makeSut();
        jest
            .spyOn(editUserRepositorySpy, "editUser")
            .mockImplementationOnce(throwError);
        const promise = sut.edit(mockEditUserParams());
        await expect(promise).rejects.toThrow();
    });

    test("Should call EditUserRepository with correct values", async () => {
        const { sut, editUserRepositorySpy } = makeSut();
        const editUserParams = mockEditUserParams();
        await sut.edit(editUserParams);
        expect(editUserRepositorySpy.params).toEqual({
            data: editUserParams,
            userId: editUserParams.userId,
        });
    }
    );

    test("Should return null when EditUserRepository returns null", async () => {
        const { sut, editUserRepositorySpy } = makeSut();
        jest
            .spyOn(editUserRepositorySpy, "editUser")
            .mockReturnValueOnce(Promise.resolve(null));
        const user = await sut.edit(mockEditUserParams());
        expect(user).toBeNull();
    }
    );

    test("Should return user when EditUserRepository returns user", async () => {
        const { sut, editUserRepositorySpy } = makeSut();
        const user = await sut.edit(mockEditUserParams());
        expect(user).toEqual(editUserRepositorySpy.result);
    }
    );
});
