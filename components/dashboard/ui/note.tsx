import { getColorById } from "@/lib/utils";
import { Note } from "@/service/note/types";
import React from "react";
type Props = {
  item: Note;
};

const bgColors = ["bg-yellow-200", "bg-red-200", "bg-green-200", "bg-blue-200"];

export default function Notes({ item }: Props) {
  const randomBg = getColorById(item.id.toString(), bgColors);

  return (
    <div
      className={`p-4 border border-gray-200 ${randomBg} rounded-2xl h-44 overflow-hidden`}
    >
      <p className="text-xl font-bold">{item.name}</p>
      <p className="text-sm line-clamp-5">{item.content}</p>
    </div>
  );
}
