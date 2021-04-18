import { celebrate, Segments, Joi } from "celebrate";
export default class ValidationFactory {
  constructor({}) {}
  validateLecture() {
    return celebrate({
      [Segments.BODY]: Joi.object({
        lecture: Joi.object({
          name: Joi.string().min(1).max(500).required(),
          abrv: Joi.string().min(3).max(7).required(),
          tagList: Joi.allow(),
          totalCards: Joi.allow(),
        }).unknown(true),
      }),
    });
  }
  validateLectureAbbreviation() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        abrv: Joi.string().min(3).max(7).required(),
      }).unknown(true),
    });
  }

  validateLectureNameAndAbbreviation() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        abrv: Joi.string().min(3).max(7).required(),
        name: Joi.string().min(1).max(500).required(),
      }).unknown(true),
    });
  }

  validateCardToAdd() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        card: Joi.object({
          abrv: Joi.string().min(3).max(7).required(),
          thema: Joi.string().min(3).max(500).required(),
          content: Joi.string().min(1).max(1000).required(),
          latex: Joi.number().required(),
          authorName: Joi.allow(),
          tags: Joi.allow(),
          authorId: Joi.allow(),
        }).unknown(true),
      }),
    });
  }
  validateCardToUpdate() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        _id: Joi.string().min(1).max(500).required(),
        thema: Joi.string().min(3).max(500).required(),
        content: Joi.string().min(1).max(1000).required(),
      }).unknown(true),
    });
  }

  validateUserSignUp() {
    return celebrate({
      [Segments.BODY]: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(7).required(),
        password2: Joi.string().min(7).required(),
        username: Joi.string().min(5).max(20).required(),
      }).unknown(true),
    });
  }
  validateUserSignIn() {
    return celebrate({
      [Segments.BODY]: Joi.object({
        email: Joi.string().email(),
        username: Joi.string(),
        password: Joi.string().min(7),
      }).unknown(true),
    });
  }
  validateUserPassword() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        password: Joi.string().min(7),
      }),
    });
  }
  validateUserNewPassword() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        password: Joi.string().min(7),
        password2: Joi.string().min(7),
      }),
    });
  }
  validateUserUsername() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().min(5).max(20),
      }),
    });
  }
  validateUserUserUpdate() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().min(5).max(20).required(),
        email: Joi.string().email().required(),
        name: Joi.allow(),
        surname: Joi.allow(),
      }).unknown(true),
    });
  }
}
