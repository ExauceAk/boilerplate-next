import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddNoteForm from "../forms/add-note-forms";

type Props = {
  children: React.ReactNode;
};

export default function AddNoteModal({ children }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="w-[800px]  max-w-full sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Note</DialogTitle>
            <DialogDescription>
              Add a new note to your dashboard and start managing your ideas and
              tasks.
            </DialogDescription>
          </DialogHeader>
          <AddNoteForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
