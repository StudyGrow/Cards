import { Validation } from "../../../../response/protocols/validation";
import { RequiredBooelanFieldValidation } from "../../../../validation/validators/required.boolean.field.validation";
import { RequiredFieldValidation } from "../../../../validation/validators/required.field.validation";
import { ValidationComposite } from "../../../../validation/validators/validation.composite";

export const makeAddCardValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["thema", "content"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  for (const field of ["latex"]) {
    validations.push(new RequiredBooelanFieldValidation(field));
  }

  return new ValidationComposite(validations);
};
