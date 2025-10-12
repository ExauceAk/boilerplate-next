"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    username: z.string().min(4, {
      message: "Username must be at least 4 characters.",
    }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, {
        message: "Password must be at least 6 characters long",
      })
      .max(50, {
        message: "Password must be at most 50 characters long",
      }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CreateUserFormValues = z.infer<typeof schema>;

/**
 * Hook that return create manager and front desk user  form
 * @returns formContext || newForm
 */
export default function useRegisterForm() {
  const formContext = useFormContext<CreateUserFormValues>();

  const newForm = useForm<CreateUserFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  return formContext || newForm;
}
