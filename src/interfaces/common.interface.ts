export interface ResponseFilter {
  questions: Question[];
  calculations: Calculation[];
  urlParameters: UrlParameter[];
  quiz?: Quiz;
  submissionId: string;
  submissionTime: string;
  filters: FilterClauseType[];
}

export interface Question {
  id: string;
  name: string;
  type: string;
  value: string;
}

export interface Calculation {
  id: string;
  name: string;
  type: string;
  value: string;
}

export interface UrlParameter {
  id: string;
  name: string;
  value: string;
}

export interface Quiz {
  score: number;
  maxScore: number;
}

export interface FilterClauseType {
  id: string;
  condition: "equals" | "does_not_equal" | "greater_than" | "less_than";
  value: number | string;
}

export interface PaginateList {
  perPage: number;
  pageNo: number;
}

export interface FilloutFormResponse {
  responses: ResponseFilter[];
  totalResponses: number;
  pageCount: number;
}
