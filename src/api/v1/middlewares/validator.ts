import { RequestHandler } from "express";
import { Schema } from "joi";
import AppError from "../../../utils/app_error";

/**
 * Validate joi validations
 * @param {Schema} validationSchema
 * @returns {RequestHandler} Express middleware
 */
export default (validationSchema: Schema): RequestHandler => {
  return (req, res, next) => {
    const { error, value } = validationSchema.validate(req.body);

    if (error) return next(new AppError(error.message, 400));

    req.value = value;

    next();
  };
};