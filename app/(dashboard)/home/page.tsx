"use client";

import AddNoteModal from "@/components/dashboard/modals/add-note-modal";
import Note from "@/components/dashboard/ui/note";
import { Button } from "@/components/ui/button";
import { useNotes } from "@/service/note/hooks";

export default function Home() {
  const { data: notes, isLoading } = useNotes();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className=" w-full relative p-10 space-y-5 flex flex-col">
        <p className="text-5xl font-bold">My Notes</p>
        <p>Order and manage your ideas and tasks</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-full overflow-auto hide-scrollbar ">
          {notes?.data.map((item) => (
            <Note key={item.id} item={item} />
          ))}
        </div>
        <AddNoteModal>
          <Button className="rounded-full bg-purple-600 hover:bg-purple-300 size-11 text-2xl absolute bottom-10 right-10">
            +
          </Button>
        </AddNoteModal>
      </div>
    </>
  );
}
