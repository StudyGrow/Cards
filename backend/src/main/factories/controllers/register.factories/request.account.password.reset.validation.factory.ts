import { EmailValidatorAdapter } from "../../../../infrastructure/validators/email.validator.adapter";
import { Validation } from "../../../../response/protocols/validation";
import { EmailValidation } from "../../../../validation/validators/email.validation";
import { RequiredFieldValidation } from "../../../../validation/validators/required.field.validation";
import { ValidationComposite } from "../../../../validation/validators/validation.composite";

export const makeRequestAccountPasswordResetValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["email"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  validations.push(new EmailValidation("email", new EmailValidatorAdapter()));
  return new ValidationComposite(validations);
};
