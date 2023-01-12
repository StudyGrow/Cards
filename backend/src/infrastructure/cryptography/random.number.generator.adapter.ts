import { RandomNumberGenerator } from "../../data/protocols/cryptography/random.number.generator";

export class RandomNumberGeneratorAdapter implements RandomNumberGenerator {
  constructor() { }

  async generateNumber(length: number): Promise<string> {
    return Math.random().toString().substring(2, length + 2);
  }
}
