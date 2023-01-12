// import { makeRegisterValidation } from "../../factories";
// import {
//   ValidationComposite,
//   RequiredFieldValidation,
//   CompareFieldsValidation,
//   EmailValidation,
// } from "../../../validation/validators";
// import { Validation } from "../../../response/protocols";
// import { EmailValidatorAdapter } from "../../../infrastructure/validators";

// jest.mock("@/validation/validators/validation-composite");

// describe("SignUpValidation Factory", () => {
//   test("Should call ValidationComposite with all validations", () => {
//     makeRegisterValidation();
//     const validations: Validation[] = [];
//     for (const field of ["name", "email", "password", "passwordConfirmation"]) {
//       validations.push(new RequiredFieldValidation(field));
//     }
//     validations.push(
//       new CompareFieldsValidation("password", "passwordConfirmation")
//     );
//     validations.push(new EmailValidation("email", new EmailValidatorAdapter()));
//     expect(ValidationComposite).toHaveBeenCalledWith(validations);
//   });
// });
