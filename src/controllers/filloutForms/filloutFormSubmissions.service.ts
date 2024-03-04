import {
  FilloutFormResponse,
  FilterClauseType,
  Question,
} from "../../interfaces/common.interface";
import { FetchFilteredFormResponses } from "../../interfaces/filloutForms/fetchFilteredResponses.interface";
import filloutFormServices from "../../services/filloutFormServices";

const fetchFilteredFormResponsesService = async (
  payload: FetchFilteredFormResponses
): Promise<FilloutFormResponse> => {
  try {
    let result = await filloutFormServices.fetchSubmissions(payload);
    let allResponses = result?.responses;

    let filteredResponses = allResponses.filter((response) => {
      let questions = response.questions;
      if (createFilters(payload.filters, questions))
        return {
          ...response,
          filters: payload.filters,
        };
    });
    const pageCount =
      filteredResponses.length === parseInt(payload.perPage.toString())
        ? result.pageCount
        : Math.ceil(
            filteredResponses.length / parseInt(payload.perPage.toString())
          );
    const totalResponses = filteredResponses.length;

    return {
      pageCount: pageCount,
      responses: filteredResponses,
      totalResponses: totalResponses,
    };
  } catch (error) {
    console.error("Error fetching filtered form responses:", error);
    return {
      pageCount: payload.pageNo,
      responses: [],
      totalResponses: 0,
    };
  }
};

const createFilters = (filters: FilterClauseType[], questions: Question[]) => {
  let filteredQuestions: Question[] = [];

  if (filters && filters.length > 0)
    questions.forEach((question) => {
      const questionFilter = filters?.find((filter) => {
        if (filter.id === question.id) return filter;
      });

      if (
        questionFilter &&
        (() => {
          const condition = questionFilter.condition;
          const value = convertValueBasedOnType(
            question.type,
            questionFilter.value
          );
          const responseValue = question.value;

          switch (condition) {
            case "does_not_equal":
              return responseValue !== value;
            case "equals":
              return responseValue === value;
            case "greater_than":
              return responseValue > value;
            case "less_than":
              return responseValue < value;
            default:
              throw new Error(`Unsupported filter condition: ${condition}`);
          }
        })()
      ) {
        filteredQuestions.push(question);
      } else if (!questionFilter) filteredQuestions.push(question);
    });
  else filteredQuestions = questions;

  return filteredQuestions.length === questions.length;
};

const convertValueBasedOnType = (type: string, value: any) => {
  switch (type) {
    case "NumberInput":
      return parseFloat(value);
    default:
      return value;
  }
};

export default { fetchFilteredFormResponsesService };
