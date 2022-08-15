export interface RandomNumberGenerator {
  generateNumber: (length: number) => Promise<string>;
}
