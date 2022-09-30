import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosClient from "core/configs/axios";

export enum ApiResponseStatus {
  SUCCESS = "success",
  FAILED = "failed",
}

export interface ApiResponseBase {
  errors: Record<string, string[]> | null;
  status: ApiResponseStatus;
  data: unknown;
}

export interface ApiResponse<Data = unknown> extends ApiResponseBase {
  data: Data;
}


export async function post<T extends ApiResponseBase>(
  url: string,
  body?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axiosClient.post<T>(url, body, config);
}

export async function patch<T extends ApiResponseBase>(
  url: string,
  body?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axiosClient.patch<T>(url, body, config);
}

export async function get<T extends ApiResponseBase>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axiosClient.get<T>(url, config);
}
