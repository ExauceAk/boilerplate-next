"use server";

import { fetchData } from "@/lib/utils";
import { FetchService } from "../config/fetch";
import { DATA_BODY_KEY } from "./enum";
import { User } from "./types";
import { getToken } from "../config/user-token";

const fetchService: FetchService = new FetchService({
  requestInterceptor: async (config) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${await getToken()}`,
    },
  }),
});

async function handleResponse(
  response: Response
): Promise<any | { error: string }> {
  if (response.ok) {
    const { [DATA_BODY_KEY]: data } = await response.json();
    return data;
  }
  const error = await fetchData(response);
  return { error: error };
}

export const registerUser = async (
  args: Partial<User>,
  headers: HeadersInit = { "Content-Type": "application/json" }
) => {
  const response = await fetchService.post(
    "/auth/register",
    JSON.stringify({
      email: args.email,
      username: args.username,
      password: args.password,
      confirmPassword: args.confirmPassword,
    }),
    { headers }
  );
  return handleResponse(response);
};

export const forgotPassword = async (
  args: Partial<User>,
  headers: HeadersInit = { "Content-Type": "application/json" }
) => {
  const response = await fetchService.post(
    "/auth/forgot-password",
    JSON.stringify({
      email: args.email,
    }),
    { headers }
  );
  return handleResponse(response);
};

export const resetPassword = async (
  args: Partial<User>,
  token: string,
  headers: HeadersInit = { "Content-Type": "application/json" }
) => {
  const response = await fetchService.post(
    "/auth/reset-password",
    JSON.stringify({
      token,
      password: args.password,
      confirmPassword: args.confirmPassword,
    }),
    { headers }
  );
  return handleResponse(response);
};
