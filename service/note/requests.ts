"use server";

import { FetchService } from "../config/fetch";
import { getToken } from "../config/user-token";
import ApiError from "../config/api-error";
import { fetchData } from "@/lib/utils";
import { Note } from "./types";
import { DATA_BODY_KEY } from "./enum";

const fetchService: FetchService = new FetchService({
  requestInterceptor: async (config) => ({
    ...config,
    headers: {
      ...config.headers,
      // Authorization: `Bearer ${await getToken()}`,
      Authorization: `Bearer ${process.env.TEST_TOKEN}`,
    },
  }),
});

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.ok) {
    const { [DATA_BODY_KEY]: data } = await response.json();
    return data.data;
  }
  const error = await fetchData(response);
  throw new ApiError(error);
}

export const getAllNotes = async (): Promise<Note[]> => {
  const response = await fetchService.get("/notes");
  return handleResponse<Note[]>(response);
};

export const getOneNote = async (id: string): Promise<Note> => {
  const response = await fetchService.get(`/notes/${id}`);
  return handleResponse<Note>(response);
};

export const createNote = async <T>(
  args: Partial<Note>,
  headers: HeadersInit = { "Content-Type": "application/json" }
) => {
  const response = await fetchService.post(
    "/notes",
    JSON.stringify({
      name: args.name,
    }),
    { headers }
  );
  return handleResponse<T>(response);
};

export const updateNote = async <T>(
  id: string,
  args: Partial<Note>,
  headers: HeadersInit = { "Content-Type": "application/json" }
) => {
  const response = await fetchService.put(
    `/notes/${id}`,
    JSON.stringify({
      name: args.name,
    }),
    { headers }
  );
  return handleResponse<T>(response);
};

export const deleteNote = async <T>(id: string) => {
  const response = await fetchService.delete(`/notes/${id}`);
  return handleResponse<T>(response);
};
