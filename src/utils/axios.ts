import axios, { AxiosError } from "axios";
export const base_url = "https://api.fillout.com";
const axiosInstance = axios.create({
  baseURL: base_url,
});

const requestHandler = (request: any) => {
  const accessToken: string =
    "sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912";

  if (accessToken && accessToken !== undefined && accessToken !== "")
    request.headers["Authorization"] = accessToken
      ? "Bearer " + accessToken
      : "";

  return request;
};
axiosInstance.interceptors.request.use(requestHandler, (error: AxiosError) => {
  Promise.reject(error);
});

export default axiosInstance;
