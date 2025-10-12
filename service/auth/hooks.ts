"use client";

import { useCreateMutationHook } from "../config/hooks";
import { forgotPassword, registerUser, resetPassword } from "./requests";
import { User } from "./types";

// Mutations
export const useRegisterUserMutation = () =>
  useCreateMutationHook(
    ["auth", "register"],
    (args: Partial<User>) => registerUser(args),
    []
  );

export const useForgotPasswordMutation = () =>
  useCreateMutationHook(
    ["auth", "forgot-password"],
    (args: Partial<User>) => forgotPassword(args),
    []
  );

export const useResetPasswordMutation = (token: string) =>
  useCreateMutationHook(
    ["auth", "reset-password"],
    (args: Partial<User>) => resetPassword(args, token),
    []
  );
