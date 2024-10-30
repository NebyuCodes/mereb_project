import { Router } from "express";
const router = Router();

import { validator } from "../../middlewares";

import { createPersonValidation, updatePersonValidation } from "./validations";

import {
  createPerson,
  getAllPersons,
  getPerson,
  updatePerson,
  deletePerson,
} from "./controller";

router
  .route("/")
  .post(validator(createPersonValidation), createPerson)
  .get(getAllPersons);

router
  .route("/:id")
  .get(getPerson)
  .patch(validator(updatePersonValidation), updatePerson)
  .delete(deletePerson);

export default router;
