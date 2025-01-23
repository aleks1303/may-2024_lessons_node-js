import joi from "joi";

export class UserValidator {
  public static create = joi.object({
    name: joi.string().min(3).max(50).trim().required(),
    age: joi.number().min(18).max(120).required(),
    email: joi.string().email().trim().required(),
    password: joi.string().trim().required(),
    phone: joi.string().trim().optional(),
  });

  public static update = joi.object({
    name: joi.string().min(3).max(50).trim().required(),
    age: joi.number().min(18).max(120).required(),
    email: joi.string().email().trim().required(),
    password: joi.string().trim().required(),
    phone: joi.string().trim().optional(),
  });
}
