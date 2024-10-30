import { CPersonService, QPersonService } from "./dal";
import AppError from "../../../../utils/app_error";
import { RequestHandler } from "express";

export const createPerson: RequestHandler = async (req, res, next) => {
  try {
    const data = <Person.ICreatePerson>req.value;

    const person = await CPersonService.createPerson(data);

    res.status(200).json({
      status: "SUCCESS",
      message: "You have successfully created a person.",
      data: {
        person,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all persons
export const getAllPersons: RequestHandler = async (req, res, next) => {
  try {
    const { persons, results } = await QPersonService.getAllPersons(req.query);

    res.status(200).json({
      status: "SUCCESS",
      results: persons.length,
      totalResults: results,
      data: {
        persons,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a person
export const getPerson: RequestHandler = async (req, res, next) => {
  try {
    const person = await QPersonService.getPerson(req.params.id);
    if (!person) return next(new AppError("Person does not exists.", 404));

    res.status(200).json({
      status: "SUCCESS",
      data: {
        person,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a person
export const updatePerson: RequestHandler = async (req, res, next) => {
  try {
    const data = <Person.IUpdatePerson>req.value;

    const person = await CPersonService.updatePerson(req.params.id, data);
    if (!person) return next(new AppError("Person does not exists.", 404));

    res.status(200).json({
      status: "SUCCESS",
      message: "You have successfully updated person information.",
      data: {
        person,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a person
export const deletePerson: RequestHandler = async (req, res, next) => {
  try {
    const person = await CPersonService.deletePerson(req.params.id);
    if (!person) return next(new AppError("Person does not exists.", 404));

    res.status(200).json({
      status: "SUCCESS",
      message: "You have successfully deleted a person.",
    });
  } catch (error) {
    next(error);
  }
};
