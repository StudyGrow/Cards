import { InvalidParamError } from "../../response/errors/invalid.parameter.error";
import { Validation } from "../../response/protocols/validation";

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) { }

  validate(input: any): Error | null {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName);
    }
    return null;
  }
}
