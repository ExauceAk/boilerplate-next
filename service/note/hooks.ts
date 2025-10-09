"use client";

import { useCreateMutationHook, useCreateQueryHook } from "../config/hooks";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getOneNote,
  updateNote,
} from "./requests";
import { Note } from "./types";

// Keys
export const ALL_NOTE_KEY = ["note"];
export const ONE_NOTE_KEY = (id: string) => [`note`, id];

// Queries
export const useNotes = () =>
  useCreateQueryHook(ALL_NOTE_KEY, async () => await getAllNotes());

export const useNotesById = (id: string) =>
  useCreateQueryHook(ONE_NOTE_KEY(id), async () => await getOneNote(id), {
    enabled: !!id,
  });

// Mutations
export const useCreateNotes = () =>
  useCreateMutationHook(
    ["learning", "create"],
    (args: Partial<Note>) => createNote(args),
    [ALL_NOTE_KEY]
  );

export const useUpdateNotes = (id: string) =>
  useCreateMutationHook(
    ["learning", "update", id],
    (args: Partial<Note>) => updateNote(id, args),
    [ALL_NOTE_KEY, ONE_NOTE_KEY(id)]
  );

export const useDeleteNotes = (id: string) =>
  useCreateMutationHook(["learning", "delete", id], () => deleteNote(id), [
    ALL_NOTE_KEY,
  ]);
