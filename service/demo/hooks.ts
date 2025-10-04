"use client";

import { useCreateMutationHook, useCreateQueryHook } from "../config/hooks";
import { demoRequest } from "./requests";
import { Demo } from "./types";

// Keys
export const ALL_LEARNINGS_KEY = ["learnings"];
export const ONE_LEARNING_KEY = (id: string) => ["learnings", id];

// Queries
export const useLearnings = () => useCreateQueryHook(ALL_LEARNINGS_KEY, () => demoRequest.getAll());
export const useLearningById = (id: string) => useCreateQueryHook(ONE_LEARNING_KEY(id),() => demoRequest.getOne(id), { enabled: !!id });

// Mutations
export const useCreateLearning = () =>
  useCreateMutationHook(["learning", "create"],(args: Demo) =>  demoRequest.create( args), [ALL_LEARNINGS_KEY]);

export const useUpdateLearning = (id: string) =>
  useCreateMutationHook(["learning", "update", id], (args: Demo) => demoRequest.update(id, args), [ALL_LEARNINGS_KEY, ONE_LEARNING_KEY(id)]);

export const useDeleteLearning = (id: string) =>
  useCreateMutationHook(["learning", "delete", id], () => demoRequest.delete(id), [ALL_LEARNINGS_KEY]);
