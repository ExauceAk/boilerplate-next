"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useAddNoteForm, {
  AddNoteFormValues,
} from "@/hooks/dashboard/use-add-note-form";
import { cn } from "@/lib/utils";
import { useCreateNotes } from "@/service/note/hooks";
import { Loader2 } from "lucide-react";
import { useCallback } from "react";
import { toast } from "sonner";

export default function AddNoteForm() {
  const form = useAddNoteForm();

  const { mutateAsync: createNoteMutateAsync } = useCreateNotes();

  const onSubmit = useCallback(
    async (values: AddNoteFormValues) => {
      await createNoteMutateAsync(
        {
          name: values.title,
          content: values.content,
        },

        {
          onSuccess: () => {
            toast("Add note", {
              description: "Note added successfully!",
            });
          },
          onError: () => {
            toast("Add note", {
              description: "Note not added!",
            });
          },
        }
      );
    },
    [createNoteMutateAsync]
  );

  return (
    <Form {...form}>
      <form className={cn("space-y-6")} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[#1D3055]">Title</FormLabel>
              <FormControl>
                <Input placeholder="Note title" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[#1D3055]">Title</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Note content"
                  {...field}
                  className="h-40"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className=" bg-purple-400 font-semibold hover:bg-purple-400 w-1/2 mx-auto flex"
          type="submit"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          Add
        </Button>
      </form>
    </Form>
  );
}
