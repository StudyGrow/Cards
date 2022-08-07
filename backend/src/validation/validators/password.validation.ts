import { InvalidPasswordError } from "../../response/errors/invalid.password.error";
import { Validation } from "../../response/protocols/validation";
import { PasswordValidator } from "../protocols/password.validator";

export class PasswordValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly passwordValidator: PasswordValidator
  ) { }

  validate(input: any): Error | null {
    const isValid = this.passwordValidator.isValid(input[this.fieldName]);
    if (!isValid) {
      return new InvalidPasswordError(this.fieldName);
    }
    return null;
  }
}
