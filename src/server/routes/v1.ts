import { Application } from "express";
import { person } from "../../api/v1/resources";

/**
 * Route based on the version of the API
 * @param {Application} app
 * @returns {}
 */
export default (app: Application) => {
  app.use("/api/v1/person", person);
};
