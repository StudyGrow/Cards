import faker from "faker"
import { RandomNumberGenerator } from "../protocols/cryptography/random.number.generator"

export class RandomNumberGeneratorSpy implements RandomNumberGenerator {
    number: string = faker.datatype.number().toString();
    length: number = 0;
    async generateNumber(length: number): Promise<string> {
        this.length = length;
        return this.number;
    }
}