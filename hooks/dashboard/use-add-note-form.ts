"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    content: z.string().min(2, {
      message: "Content must be at least 2 characters.",
    }),
  })
  .required();

export type AddNoteFormValues = z.infer<typeof schema>;

/**
 * Hook that return create manager and front desk user  form
 * @returns formContext || newForm
 */
export default function useAddNoteForm() {
  const formContext = useFormContext<AddNoteFormValues>();

  const newForm = useForm<AddNoteFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      content: "",
    },
    mode: "all",
  });

  return formContext || newForm;
}
