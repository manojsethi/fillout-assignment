import { NextFunction, Request, Response } from "express";
import { FetchFilteredFormResponses } from "../../interfaces/filloutForms/fetchFilteredResponses.interface";
import filloutFormSubmissionsService from "./filloutFormSubmissions.service";

const fetchFilteredFormResponses = async (
  _req: Request,
  _res: Response,
  _nextFunction: NextFunction
) => {
  const body = _req.query as any as FetchFilteredFormResponses;

  let response =
    await filloutFormSubmissionsService.fetchFilteredFormResponsesService(body);
  _res.json(response);
};

export default {
  fetchFilteredFormResponses,
};
