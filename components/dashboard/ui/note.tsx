import { getColorById } from "@/lib/utils";
import React from "react";
type Props = {
  item: any;
};

const bgColors = ["bg-yellow-200", "bg-red-200", "bg-green-200", "bg-blue-200"];

export default function Note({ item }: Props) {
  const randomBg = getColorById(item.id.toString(), bgColors);

  return (
    <div
      className={`p-4 border border-gray-200 ${randomBg} rounded-2xl h-44 overflow-hidden`}
    >
      <p className="text-xl font-bold">{item.title}</p>
      <p className="text-sm line-clamp-5">{item.description}</p>
    </div>
  );
}
