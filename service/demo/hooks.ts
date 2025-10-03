"use client";

import { useCreateMutationHook, useCreateQueryHook } from "../config/hooks";

// Keys
export const ALL_LEARNINGS_KEY = ["learnings"];
export const ONE_LEARNING_KEY = (id: string) => ["learnings", id];

// Queries
export const useLearnings = () => useCreateQueryHook(ALL_LEARNINGS_KEY, learningService.all);
export const useLearningById = (id: string) => useCreateQueryHook(ONE_LEARNING_KEY(id), () => learningService.one(id), { enabled: !!id });

// Mutations
export const useCreateLearning = () =>
  useCreateMutationHook(["learning", "create"], learningService.create, [ALL_LEARNINGS_KEY]);

export const useUpdateLearning = (id: string) =>
  useCreateMutationHook(["learning", "update", id], (args) => learningService.update(id, args), [ALL_LEARNINGS_KEY, ONE_LEARNING_KEY(id)]);

export const useDeleteLearning = (id: string) =>
  useCreateMutationHook(["learning", "delete", id], (args) => learningService.delete(args), [ALL_LEARNINGS_KEY]);
