"use server";

import { fetchData } from "@/lib/utils";
import { FetchService } from "../config/fetch";
import { DATA_BODY_KEY } from "./enum";
import { Note } from "./types";

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

export const getAllNotes = async (): Promise<
  | {
      data: Note[];
      page: number;
      total: number;
    }
  | { error: string }
> => {
  const response = await fetchService.get("/notes");
  return handleResponse(response);
};

export const getOneNote = async (
  id: string
): Promise<Note | { error: string }> => {
  const response = await fetchService.get(`/notes/${id}`);
  return handleResponse(response);
};

export const createNote = async (
  args: Partial<Note>,
  headers: HeadersInit = { "Content-Type": "application/json" }
) => {
  const response = await fetchService.post(
    "/notes",
    JSON.stringify({
      name: args.name,
      content: args.content,
    }),
    { headers }
  );
  return handleResponse(response);
};

export const updateNote = async (
  id: string,
  args: Partial<Note>,
  headers: HeadersInit = { "Content-Type": "application/json" }
) => {
  const response = await fetchService.patch(
    `/notes/${id}`,
    JSON.stringify({
      name: args.name,
      content: args.content,
    }),
    { headers }
  );
  return handleResponse(response);
};

export const deleteNote = async (id: string) => {
  const response = await fetchService.delete(`/notes/${id}`);
  return handleResponse(response);
};
