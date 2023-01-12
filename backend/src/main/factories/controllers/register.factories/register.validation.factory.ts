import { Validation } from "../../../../response/protocols/validation";
import { RequiredFieldValidation } from "../../../../validation/validators/required.field.validation";
import { ValidationComposite } from "../../../../validation/validators/validation.composite";

export const makeRegisterValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["username"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
