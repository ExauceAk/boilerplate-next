import React from "react";
type Props = {
  item: any;
};
export default function Note({ item }: Props) {
  return (
    <div className="flex flex-col gap-2 p-4 border-b border-gray-200 ">
      <p className="text-xl font-bold">{item.title}</p>
      <p className="text-sm">{item.date}</p>
      <p className="text-sm">{item.description}</p>
    </div>
  );
}
