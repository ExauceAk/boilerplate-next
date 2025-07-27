"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

// Schéma de validation pour le mot de passe et la confirmation
const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(12, {
        message: "Password must be at least 12 characters long",
      })
      .max(50, {
        message: "Password must be at most 50 characters long",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])(?=.{8,})/, {
        message: "Password must contain at least one uppercase, one lowercase, one number and one special character",
      }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 12 characters long.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordInformation = z.infer<typeof resetPasswordSchema>;

/**
 * Hook that returns the form context for the reset password form
 * @returns formContext || newForm
 */
export default function useResetPasswordForm() {
  const formContext = useFormContext<ResetPasswordInformation>();

  const newForm = useForm<ResetPasswordInformation>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  return formContext || newForm;
}
