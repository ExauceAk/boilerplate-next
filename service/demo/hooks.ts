// services/hooks/useLearnings.ts
"use client";

import { learningService } from "@/services/api/learning";
import { createQueryHook } from "../config/hooks";

// Keys
export const ALL_LEARNINGS_KEY = ["learnings"];
export const ONE_LEARNING_KEY = (id: string) => ["learnings", id];

// Queries
export const useLearnings = () => createQueryHook(ALL_LEARNINGS_KEY, learningService.all);
export const useLearningById = (id: string) => createQueryHook(ONE_LEARNING_KEY(id), () => learningService.one(id), { enabled: !!id });

// Mutations
export const useCreateLearning = () =>
  createMutationHook(["learning", "create"], learningService.create, [ALL_LEARNINGS_KEY]);

export const useUpdateLearning = (id: string) =>
  createMutationHook(["learning", "update", id], (args) => learningService.update(id, args), [ALL_LEARNINGS_KEY, ONE_LEARNING_KEY(id)]);

export const useDeleteLearning = (id: string) =>
  createMutationHook(["learning", "delete", id], (args) => learningService.delete(args), [ALL_LEARNINGS_KEY]);
