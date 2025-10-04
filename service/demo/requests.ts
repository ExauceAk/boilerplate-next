"use server";

import { FetchService } from "../config/fetch";
import { getToken } from "../config/user-token";
import ApiError from "../config/api-error";
import { fetchData } from "@/lib/utils";
import { create } from "domain";
import { Demo } from "./types";

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

export const demoRequest = {
  getAll: async <T>() => {
    const response = await fetchService.get("/demo");
    return handleResponse<T>(response);
  },

  getOne: async <T>(id: string) => {
    const response = await fetchService.get(`/demo/${id}`);
    return handleResponse<T>(response);
  },
  create: async <T>(
    args: Demo,
    headers: HeadersInit = { "Content-Type": "application/json" }
  ) => {
    const response = await fetchService.post(
      "/demo",
      JSON.stringify({
        name: args.name,
      }),
      { headers }
    );
    return handleResponse<T>(response);
  },
  update: async <T>(
    id: string,
    args: Demo,
    headers: HeadersInit = { "Content-Type": "application/json" }
  ) => {
    const response = await fetchService.put(
      `/demo/${id}`,
      JSON.stringify({
        name: args.name,
      }),
      { headers }
    );
    return handleResponse<T>(response);
  },
  delete: async <T>(id: string) => {
    const response = await fetchService.delete(`/demo/${id}`);
    return handleResponse<T>(response);
  },
};
