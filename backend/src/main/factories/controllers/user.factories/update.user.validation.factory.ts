import { Validation } from "../../../../response/protocols/validation";
import { RequiredFieldValidation } from "../../../../validation/validators/required.field.validation";
import { ValidationComposite } from "../../../../validation/validators/validation.composite";

export const makeUpdateUserValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["userId"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
