import { celebrate, Segments, Joi } from "celebrate";
export default class ValidationFactory {
  constructor({}) {}
  validateLectureAbbreviation() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        abrv: Joi.string().min(3).max(7).required(),
      }),
    });
  }

  validateLectureNameAndAbbreviation() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().min(3).max(7).required(),
        abrv: Joi.string().min(1).max(500).required(),
      }),
    });
  }

  validateCardToAdd() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        abrv: Joi.string().min(3).max(7).required(),
        thema: Joi.string().min(3).max(500).required(),
        content: Joi.string().min(1).max(1000).required(),
      }),
    });
  }
  validateCardToUpdate() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        _id: Joi.string().min(1).max(500).required(),
        thema: Joi.string().min(3).max(500).required(),
        content: Joi.string().min(1).max(1000).required(),
      }),
    });
  }

  validateUserSignUp() {
    console.log("email")
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().min(7),
        username: Joi.string().min(5).max(20),
      }),
    });
  }
  validateUserSignIn() {
    console.log("email")
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().min(7),
      }),
    });
  }
  validateUserPassword() {
    console.log("passsword")

    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        password: Joi.string().min(7),
      }),
    });
  }
  validateUserUsername() {
    console.log("usrname")

    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().min(5).max(20),
      }),
    });
  }
}
