import { EmailValidatorAdapter } from "../../../../infrastructure/validators/email.validator.adapter";
import { PasswordValidatorAdapter } from "../../../../infrastructure/validators/password.validator.adapter";
import { Validation } from "../../../../response/protocols/validation";
import { EmailValidation } from "../../../../validation/validators/email.validation";
import { PasswordValidation } from "../../../../validation/validators/password.validation";
import { RequiredFieldValidation } from "../../../../validation/validators/required.field.validation";
import { ValidationComposite } from "../../../../validation/validators/validation.composite";


export const makeResetAccountPasswordValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["email", "password"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  validations.push(new EmailValidation("email", new EmailValidatorAdapter()));
  validations.push(new PasswordValidation("password", new PasswordValidatorAdapter()));
  return new ValidationComposite(validations);
};
