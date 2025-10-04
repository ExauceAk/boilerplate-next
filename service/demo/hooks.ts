"use client";

import { useCreateMutationHook, useCreateQueryHook } from "../config/hooks";
import { demoRequest } from "./requests";
import { Demo } from "./types";

// Keys
export const ALL_DEMOS_KEY = ["demo"];
export const ONE_DEMOS_KEY = (id: string) => ["demo", id];

// Queries
export const useLearnings = () => useCreateQueryHook(ALL_DEMOS_KEY, () => demoRequest.getAll());
export const useLearningById = (id: string) => useCreateQueryHook(ONE_DEMOS_KEY(id),() => demoRequest.getOne(id), { enabled: !!id });

// Mutations
export const useCreateLearning = () =>
  useCreateMutationHook(["learning", "create"],(args: Demo) =>  demoRequest.create( args), [ALL_DEMOS_KEY]);

export const useUpdateLearning = (id: string) =>
  useCreateMutationHook(["learning", "update", id], (args: Demo) => demoRequest.update(id, args), [ALL_DEMOS_KEY, ONE_DEMOS_KEY(id)]);

export const useDeleteLearning = (id: string) =>
  useCreateMutationHook(["learning", "delete", id], () => demoRequest.delete(id), [ALL_DEMOS_KEY]);
