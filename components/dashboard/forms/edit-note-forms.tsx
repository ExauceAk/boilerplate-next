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
import { AddNoteFormValues } from "@/hooks/dashboard/use-add-note-form";
import useEditNoteForm from "@/hooks/dashboard/use-edit-note-form";
import { cn } from "@/lib/utils";
import { useUpdateNotes } from "@/service/note/hooks";
import { Note } from "@/service/note/types";
import { Loader2 } from "lucide-react";
import { useCallback } from "react";
import { toast } from "sonner";

export default function EditNoteForm({ note }: { note: Note }) {
  const form = useEditNoteForm(note);

  const { mutateAsync: updateNoteMutateAsync } = useUpdateNotes(note.id);

  const onSubmit = useCallback(
    async (values: AddNoteFormValues) => {
      await updateNoteMutateAsync(
        {
          name: values.title,
          content: values.content,
        },

        {
          onSuccess: () => {
            toast("Edit note", {
              description: "Note edited successfully!",
            });
          },
          onError: (error) => {
            toast("Edit note", {
              description: `Note not edited! ${error.message}`,
            });
          },
        }
      );
    },
    [updateNoteMutateAsync, note.id]
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
          Edit
        </Button>
      </form>
    </Form>
  );
}
