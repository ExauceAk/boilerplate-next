"use client";

import { Button } from "@/components/ui/button";
import { getColorById } from "@/lib/utils";
import { Note } from "@/service/note/types";
import { Eye, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import DeleteNoteModal from "../modals/delete-note-modal";
import EditNoteModal from "../modals/edit-note-modal";
import { useRouter } from "next/navigation";
type Props = {
  item: Note;
};

const bgColors = ["bg-yellow-200", "bg-red-200", "bg-green-200", "bg-blue-200"];

export default function Notes({ item }: Props) {
  const randomBg = getColorById(item.id.toString(), bgColors);

  const router = useRouter();

  return (
    <div
      className={`p-2 border border-gray-200 ${randomBg} rounded-2xl h-44 overflow-hidden relative`}
    >
      <p className="text-xl font-bold">{item.name}</p>
      <p className="text-sm line-clamp-5">{item.content}</p>
      <div className="flex absolute right-4 bottom-2 gap-3">
        <Button
          className="size-6"
          onClick={() => router.push(`/home/${item.id}`)}
        >
          <Eye />
        </Button>
        <EditNoteModal note={item}>
          <Button className="size-6">
            <FilePenLine size={10} />
          </Button>
        </EditNoteModal>
        <DeleteNoteModal id={item.id}>
          <Button className="size-6">
            <Trash2 size={10} />
          </Button>
        </DeleteNoteModal>
      </div>
    </div>
  );
}
