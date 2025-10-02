"use server";

import { fetchData } from "@/lib/utils";
import ApiError from "@/services/api/errors/api-error";
import { getToken } from "@/utils/user-token";
import { FetchService } from "../config/fetch";

export const fetchService: FetchService = new FetchService({
  requestInterceptor: async (config) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${await getToken()}`,
    },
  }),
});

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.ok) {
    return response.json();
  }
  const error = await fetchData(response);
  throw new ApiError(error);
}

export const api = {
  get: async <T>(url: string) => {
    const response = await fetchService.get(url);
    return handleResponse<T>(response);
  },
  post: async <T>(url: string, body: any, headers: HeadersInit = { "Content-Type": "application/json" }) => {
    const response = await fetchService.post(url, body, { headers });
    return handleResponse<T>(response);
  },
  put: async <T>(url: string, body: any, headers: HeadersInit = { "Content-Type": "application/json" }) => {
    const response = await fetchService.put(url, body, { headers });
    return handleResponse<T>(response);
  },
  delete: async <T>(url: string) => {
    const response = await fetchService.delete(url);
    return handleResponse<T>(response);
  },
};
