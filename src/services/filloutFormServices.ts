import { FilloutFormResponse } from "../interfaces/common.interface";
import { FetchFilteredFormResponses } from "../interfaces/filloutForms/fetchFilteredResponses.interface";
import axiosInstance from "../utils/axios";

const fetchSubmissions = async (
  payload: FetchFilteredFormResponses
): Promise<FilloutFormResponse> => {
  let response = await axiosInstance.get(
    `/v1/api/forms/${payload.formId}/submissions`,
    {
      params: {
        limit: payload.perPage,
        offset: (payload.pageNo - 1) * payload.perPage,
      },
    }
  );

  return response.data;
};

export default { fetchSubmissions };
