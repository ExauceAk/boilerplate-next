"use client";

import { useQuery, useMutation, useQueryClient, QueryKey, MutateOptions } from "@tanstack/react-query";
import { useCallback } from "react";
import ApiError from "@/services/api/errors/api-error";

export function useCreateQueryHook<T>(
  key: QueryKey,
  fetcher: () => Promise<T>,
  options?: { enabled?: boolean },
) {
  return useQuery<T, ApiError>({
    queryKey: key,
    queryFn: async () => {
      const result = await fetcher();
      if (typeof result === "string") return result as unknown as T;
      if (result && (result as any).error) throw new ApiError((result as any).error);
      return result;
    },
    enabled: options?.enabled ?? true,
  });
}

export function useCreateMutationHook<TArgs, TResult>(
  key: QueryKey,
  mutator: (args: TArgs) => Promise<TResult>,
  invalidateKeys: QueryKey[] = [],
) {
  const queryClient = useQueryClient();

  const getMutationOptions = useCallback(
    <TContext = unknown>(
      mutateOptions?: MutateOptions<TResult, ApiError, TArgs, TContext>,
    ): MutateOptions<TResult, ApiError, TArgs, TContext> => ({
      ...mutateOptions,
      onSettled: async (...args) => {
        await Promise.all(invalidateKeys.map((k) => queryClient.invalidateQueries({ queryKey: k })));
        return mutateOptions?.onSettled?.(...args);
      },
    }),
    [invalidateKeys, queryClient],
  );

  const mutation = useMutation<TResult, ApiError, TArgs>({
    mutationKey: key,
    mutationFn: async (args) => {
      const result = await mutator(args);
      if (typeof result === "string") return result as unknown as TResult;
      if (result && (result as any).error) throw new ApiError((result as any).error);
      return result;
    },
  });

  const mutate: typeof mutation.mutate = (args, opts?) => mutation.mutate(args, getMutationOptions(opts));
  const mutateAsync: typeof mutation.mutateAsync = (args, opts?) => mutation.mutateAsync(args, getMutationOptions(opts));

  return { ...mutation, mutate, mutateAsync } as typeof mutation;
}
