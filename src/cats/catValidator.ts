import * as Joi from '@hapi/joi';

export class CatsValidator {
  static schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(8).required(),
    age: Joi.number()
  });
}
