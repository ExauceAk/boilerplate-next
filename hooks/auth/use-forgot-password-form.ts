"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

// Schéma de validation pour l'email
const schema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email address.",
    })
    .min(2, {
      message: "Email must be at least 2 characters long.",
    }),
});

export type ForgetPasswordFormValue = z.infer<typeof schema>;

/**
 * Hook that returns the form context for the forgot password form
 * @returns formContext || newForm
 */
export default function useForgotPasswordForm() {
  const formContext = useFormContext<ForgetPasswordFormValue>();

  const newForm = useForm<ForgetPasswordFormValue>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  return formContext || newForm;
}
