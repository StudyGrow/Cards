import { celebrate, Segments, Joi } from "celebrate";
export default class ValidationFactory {
  validateLecture(): unknown {
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
  validateVoteCardId(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
        value: Joi.number().valid(0, 1),
      }),
    });
  }
  validateLectureAbbreviation(): unknown {
    return celebrate({
      [Segments.QUERY]: Joi.object()
        .keys({
          abrv: Joi.string().min(3).max(7).required(),
        })
        .unknown(true),
    });
  }

  validateLectureNameAndAbbreviation(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object()
        .keys({
          abrv: Joi.string().min(3).max(7).required(),
          name: Joi.string().min(1).max(500).required(),
        })
        .unknown(true),
    });
  }

  validateCardToAdd(): unknown {
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
  validateCardToUpdate(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object()
        .keys({
          _id: Joi.string().min(1).max(500).required(),
          thema: Joi.string().min(3).max(500).required(),
          content: Joi.string().min(1).max(1000).required(),
        })
        .unknown(true),
    });
  }

  validateUserSignUp(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(7).required(),
        password2: Joi.string().min(7).required(),
        username: Joi.string().min(5).max(20).required(),
      }).unknown(true),
    });
  }
  validateUserSignIn(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object({
        email: Joi.string().email(),
        username: Joi.string(),
        password: Joi.string().min(7),
      }).unknown(true),
    });
  }
  validateUserPassword(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        password: Joi.string().min(7),
      }),
    });
  }
  validateUserNewPassword(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        password: Joi.string().min(7),
        password2: Joi.string().min(7),
      }),
    });
  }
  validateUserUsername(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().min(5).max(20),
      }),
    });
  }
  validateUserUserUpdate(): unknown {
    return celebrate({
      [Segments.BODY]: Joi.object()
        .keys({
          username: Joi.string().min(5).max(20).required(),
          email: Joi.string().email().required(),
          name: Joi.allow(),
          surname: Joi.allow(),
        })
        .unknown(true),
    });
  }
}
