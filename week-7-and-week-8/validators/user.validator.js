import Joi from "joi";

export const updateUserSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  age: Joi.number().min(18).max(100).messages({
    "number.min": "Age must be at least 18",
  }),
  city: Joi.string().max(50),
  role: Joi.string().valid("user", "admin"),
}).min(1);
