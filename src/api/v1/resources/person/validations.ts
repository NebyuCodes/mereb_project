import Joi from "joi";

export const createPersonValidation = Joi.object({
  firstName: Joi.string().max(100).min(1).required().messages({
    "string.base": "First name should be a string.",
    "string.empty": "First name can not be empty.",
    "string.max": "First name can not exceed 100 characters.",
    "string.min": "First name can not be less than 1 character.",
    "any.required": "First name is required.",
  }),
  lastName: Joi.string().max(100).min(1).required().messages({
    "string.base": "Last name should be a string.",
    "string.empty": "Last name can not be empty.",
    "string.max": "Last name can not exceed 100 characters.",
    "string.min": "Last name can not be less than 1 character.",
    "any.required": "Last name is required.",
  }),
  age: Joi.number().min(1).max(120).required().messages({
    "number.base": "Age should be a number.",
    "number.empty": "Age can not be empty.",
    "number.max": "Age can not exceed 120.",
    "number.min": "Age can not be less than 1.",
    "any.required": "Age is required.",
  }),
  hobbies: Joi.array()
    .items(Joi.string().default("").optional())
    .optional()
    .messages({
      "array.base": "Hobbies should be an array.",
    }),
});

export const updatePersonValidation = Joi.object({
  firstName: Joi.string().max(100).min(1).optional().messages({
    "string.base": "First name should be a string.",
    "string.empty": "First name can not be empty.",
    "string.max": "First name can not exceed 100 characters.",
    "string.min": "First name can not be less than 1 character.",
  }),
  lastName: Joi.string().max(100).min(1).optional().messages({
    "string.base": "Last name should be a string.",
    "string.empty": "Last name can not be empty.",
    "string.max": "Last name can not exceed 100 characters.",
    "string.min": "Last name can not be less than 1 character.",
  }),
  age: Joi.number().min(1).max(120).optional().messages({
    "number.base": "Age should be a number.",
    "number.empty": "Age can not be empty.",
    "number.max": "Age can not exceed 120.",
    "number.min": "Age can not be less than 1.",
  }),
});
