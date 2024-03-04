import { body, query } from "express-validator";

export const fetchFilteredSubmissionSchema = [
  query("formId")
    .notEmpty()
    .withMessage("Form id is required"),
  query("pageNo").notEmpty().withMessage("Page number is required"),
  query("perPage").notEmpty().withMessage("Per page is required").isInt({ min: 1, max: 150 }).withMessage("Per page must be between 1 and 150"),
];
