import { InvalidParamError } from "../../response/errors/invalid.parameter.error";
import { Validation } from "../../response/protocols/validation";
import { EmailValidator } from "../protocols/email.validator";

export class OptionalEmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) { }

  validate(input: any): Error | null {
    if (input[this.fieldName]) {
      const isValid = this.emailValidator.isValid(input[this.fieldName]);
      if (!isValid) {
        return new InvalidParamError(this.fieldName);
      }
      return null;
    }
    else {
      return null;
    }
  }
}
