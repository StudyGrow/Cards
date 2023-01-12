import { PasswordValidator } from "../../validation/protocols/password.validator";

export class PasswordValidatorAdapter implements PasswordValidator {
  isValid(password: string): boolean {
    return (/^[\w!@#%&/(){}[\]=?+*^~\-.:,;]{1,32}$/.test(password));
  }
}
