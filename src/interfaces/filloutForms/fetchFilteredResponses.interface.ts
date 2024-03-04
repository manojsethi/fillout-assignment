import { FilterClauseType, PaginateList } from "../common.interface";

export interface FetchFilteredFormResponses extends PaginateList {
  filters: FilterClauseType[];
  formId: string;
}
