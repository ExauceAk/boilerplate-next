import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Note } from "@/service/note/types";
import React from "react";
import EditNoteForm from "../forms/edit-note-forms";

type Props = {
  children: React.ReactNode;
  note: Note;
};

export default function EditNoteModal({ children, note }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="w-[800px]  max-w-full sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Note</DialogTitle>
            <DialogDescription>
              Edit a note to your dashboard and start managing your ideas and
            </DialogDescription>
          </DialogHeader>
          <EditNoteForm note={note} />
        </DialogContent>
      </Dialog>
    </>
  );
}
