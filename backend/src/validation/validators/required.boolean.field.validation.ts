import { MissingParamError } from "../../response/errors/missing.parameter.error";
import { Validation } from "../../response/protocols/validation";

export class RequiredBooelanFieldValidation implements Validation {
  constructor(private readonly fieldName: string) { }

  validate(input: any): Error | null {
    if (input[this.fieldName] == null) {
      return new MissingParamError(this.fieldName);
    }
    return null;
  }
}
