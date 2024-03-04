import { Router } from "express";
import filloutController from "../controllers/filloutForms/filloutFormSubmissions.controller";
import { fetchFilteredSubmissionSchema } from "../utils/validationSchemas/fetchFilteredFormSubmissions.schema";
import utils from "../utils";

const fillOutFormRoutes = Router();

fillOutFormRoutes.get(
  "/filteredResponses",
  fetchFilteredSubmissionSchema,
  utils.validateData,
  filloutController.fetchFilteredFormResponses
);

export default fillOutFormRoutes;
