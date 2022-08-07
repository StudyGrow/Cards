import { MissingParamError } from "../../response/errors/missing.parameter.error";
import { Validation } from "../../response/protocols/validation";

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) { }

  validate(input: any): Error | null {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
    return null;
  }
}
