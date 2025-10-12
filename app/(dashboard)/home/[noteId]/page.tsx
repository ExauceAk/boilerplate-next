"use client";

import { useNotesById } from "@/service/note/hooks";
import { useParams } from "next/navigation";
import React from "react";

export default function NoteDetail() {
  const { noteId } = useParams<{ noteId: string }>();
  const { data: note, isLoading } = useNotesById(noteId);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="p-10 space-y-5 flex flex-col h-full overflow-auto hide-scrollbar">
        <p className="text-5xl font-bold">{note?.name}</p>
        <p>{note?.content}</p>
      </div>
    </>
  );
}
