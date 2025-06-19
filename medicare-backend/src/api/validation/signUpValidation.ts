import Joi from "joi";

export const signUpValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  password: Joi.string().required(),
});
