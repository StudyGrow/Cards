import { EmailValidatorAdapter } from "../../../../infrastructure/validators/email.validator.adapter";
import { PasswordValidatorAdapter } from "../../../../infrastructure/validators/password.validator.adapter";
import { Validation } from "../../../../response/protocols/validation";
import { OptionalEmailValidation } from "../../../../validation/validators/optional.email.validation";
import { PasswordValidation } from "../../../../validation/validators/password.validation";
import { RequiredFieldValidation } from "../../../../validation/validators/required.field.validation";
import { ValidationComposite } from "../../../../validation/validators/validation.composite";

export const makeUpdateUserValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["userId"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  validations.push(new OptionalEmailValidation("email", new EmailValidatorAdapter()));
  validations.push(new PasswordValidation("password", new PasswordValidatorAdapter()));
  return new ValidationComposite(validations);
};
