import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteNotes } from "@/service/note/hooks";
import { DialogClose } from "@radix-ui/react-dialog";
import React, { useCallback } from "react";
import { toast } from "sonner";

type Props = {
  children: React.ReactNode;
  id: string;
};

export default function DeleteNoteModal({ children, id }: Props) {
  const { mutateAsync: deleteNote, isPending } = useDeleteNotes(id);

  const onSubmit = useCallback(async () => {
    await deleteNote(
      {
        id,
      },

      {
        onSuccess: () => {
          toast("Delete note", {
            description: "Note deleted successfully!",
          });
        },
        onError: (error) => {
          toast("Add note", {
            description: `Note not deleted! ${error.message}`,
          });
        },
      }
    );
  }, [deleteNote, id]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="flex flex-col w-[400px]">
          <DialogHeader>
            <DialogTitle>Add Note</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this note?</p>
          <div className="flex mx-auto">
            <Button
              disabled={isPending}
              className="bg-red-600 hover:bg-red-300"
              onClick={onSubmit}
            >
              Yes
            </Button>
            <DialogClose asChild>
              <Button
                disabled={isPending}
                className="ml-5 bg-gray-600 hover:bg-gray-300"
              >
                No
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
