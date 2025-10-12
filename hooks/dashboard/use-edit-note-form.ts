"use client";

import { Note } from "@/service/note/types";
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

export type EditNoteFormValues = z.infer<typeof schema>;

/**
 * Hook that return create manager and front desk user  form
 * @returns formContext || newForm
 */
export default function useEditNoteForm(note: Note) {
  const formContext = useFormContext<EditNoteFormValues>();

  const newForm = useForm<EditNoteFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: note.name,
      content: note.content,
    },
    mode: "all",
  });

  return formContext || newForm;
}
