"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  credential: z.string().min(2, {
    message: "Must be at least 2 characters long.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export type Information = z.infer<typeof schema>;

/**
 * Hook that return create manager and front desk user  form
 * @returns formContext || newForm
 */
export default function useLoginForm() {
  const formContext = useFormContext<Information>();

  const newForm = useForm<Information>({
    resolver: zodResolver(schema),
    defaultValues: {
      credential: "",
      password: "",
    },
  });

  return formContext || newForm;
}
