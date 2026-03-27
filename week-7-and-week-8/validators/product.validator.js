import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0).required().messages({
    "number.min": "Price cannot be negative",
    "any.required": "Price is required",
  }),
  category: Joi.string()
    .valid(
      "Electronics",
      "Footwear",
      "Accessories",
      "Home",
      "Stationery",
      "Clothing",
    )
    .required()
    .messages({
      "any.only": "Invalid category",
    }),
  stock: Joi.number().min(0).default(0),
  rating: Joi.number().min(0).max(5).default(0),
});
