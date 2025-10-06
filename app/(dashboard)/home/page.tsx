import Note from "@/components/dashboard/ui/note";
import { Button } from "@/components/ui/button";
import React from "react";
const date = [
  {
    id: 1,
    title: "Title 1",
    date: "2023-01-01",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Title 2",
    date: "2023-01-02",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Title 3",
    date: "2023-01-03",
    description: "Description 3",
  },
];

export default function Home() {
  return (
    <div className=" w-full relative p-10 space-y-5">
      <p className="text-5xl font-bold">My Notes</p>
      <p>Order and manage your ideas and tasks</p>
      <div>
        {date.map((item) => (
          <Note key={item.id} item={item} />
        ))}
      </div>
      <Button className="rounded-full bg-purple-600 hover:bg-purple-300 size-11 text-2xl absolute bottom-10 right-10">
        +
      </Button>
    </div>
  );
}
