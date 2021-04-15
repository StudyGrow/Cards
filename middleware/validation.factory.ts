import { celebrate, Segments, Joi } from "celebrate";
export default class ValidationFactory {
  constructor({}) {}
  getCardsByLecture(req: any, res: any, next: any) {
      celebrate({
      [Segments.BODY]: Joi.object().keys({
        vorlesung: Joi.string().min(3).max(30).required(),
      }),
    })
    ;
  }
}
