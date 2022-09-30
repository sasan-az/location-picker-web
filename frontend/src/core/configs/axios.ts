import Cookies from "js-cookie";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { userTokenKey } from "core/constants/cookies";

const axiosClient = axios.create({
  timeout: 5000,
  baseURL: process.env.NEXT_PUBLIC_API_SERVER,
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (request: AxiosRequestConfig) => {
  const token = Cookies.get(userTokenKey);

  if (token && request?.headers) {
    request.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return request;
});

axiosClient.interceptors.response.use(handleSuccessfulApi, handleFailedApi);

function handleSuccessfulApi(response: AxiosResponse) {
  return response;
}

function handleFailedApi(error: AxiosError<AxiosResponse>) {
  if (error.response?.status === 401) {
    // Cookies.remove(userTokenKey, cookieOptions);
  }
  return Promise.reject(error);
}

export default axiosClient;
