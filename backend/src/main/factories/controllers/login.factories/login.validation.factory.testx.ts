// import { makeLoginValidation } from "../../factories";
// import {
//   ValidationComposite,
//   RequiredFieldValidation,
//   EmailValidation,
// } from "../../../validation/validators"
// import { Validation } from "../../../response/protocols";
// import { EmailValidatorAdapter } from "../../../infrastructure/validators";

// jest.mock("../../../validation/validators/validation-composite");

// describe("LoginValidation Factory", () => {
//   test("Should call ValidationComposite with all validations", () => {
//     makeLoginValidation();
//     const validations: Validation[] = [];
//     for (const field of ["email", "password"]) {
//       validations.push(new RequiredFieldValidation(field));
//     }
//     validations.push(new EmailValidation("email", new EmailValidatorAdapter()));
//     expect(ValidationComposite).toHaveBeenCalledWith(validations);
//   });
// });
